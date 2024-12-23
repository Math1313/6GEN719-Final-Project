// This program was developped by Daniel Audet and uses the file "basic-objects-IFS.js"
// from http://math.hws.edu/eck/cs424/notes2013/19_GLSL.html
//
//  It has been adapted to be compatible with the "MV.js" library developped
//  for the book "Interactive Computer Graphics" by Edward Angel and Dave Shreiner.
//

"use strict";

var gl;   // The webgl context.
var canvas;

var CoordsLoc;       // Location of the coords attribute variable in the standard texture mappping shader program.
var NormalLoc;
var TexCoordLoc;

var ProjectionLoc;     // Location of the uniform variables in the standard texture mappping shader program.
var ModelviewLoc;
var NormalMatrixLoc;

var skyboxLoc, NormalMatrixLocBox, ModelviewLocBox, CoordsLocBox
var skybox;

var u_textureLoc;
var useTextureLoc;

var projection;   //--- projection matrix
var modelview;    // modelview matrix
var flattenedmodelview;    //--- flattened modelview matrix

var modelViewMatrix;
var instanceMatrix;
var normalMatrix = mat3();  //--- create a 3X3 matrix that will affect normals

var sphere, cylinder, box, teapot, disk, torus, cone;  // model identifiers
var hemisphereinside, hemisphereoutside, thindisk;
var quartersphereinside, quartersphereoutside;
var cylinderOpen;

var prog, progbox;  // shader program identifier

var lightPosition = vec4(20.0, 20.0, 100.0, 1.0);

var lightAmbient = vec4(1.0, 1.0, 1.0, 1.0);
var lightDiffuse = vec4(1.0, 1.0, 1.0, 1.0);
var lightSpecular = vec4(1.0, 1.0, 1.0, 1.0);

var defaultMaterialAmbient = vec4(0.1, 0.1, 0.1, 1.0);
var defaultMaterialDiffuse = vec4(0.48, 0.55, 0.69, 1.0);
var defaultMaterialSpecular = vec4(0.48, 0.55, 0.69, 1.0);
var defaultMaterialShininess = 100.0;

var materialAmbient = defaultMaterialAmbient;
var materialDiffuse = defaultMaterialDiffuse;
var materialSpecular = defaultMaterialSpecular;
var materialShininess = defaultMaterialShininess;

var ambientProduct, diffuseProduct, specularProduct;

var triangleBasePrism, triangle, triangleBasePrismRectangle;

var numberOfShapes = 150;
var stack = [];
var vaisseau = [];
var planets = [];
var theta = [];

var upperleft = mat3();

var texIDmap0;
var img = new Array(6);

var texID1, texID2, texID3, texID4, texID5;
var texID6, texID7, texID8;
var ntextures_tobeloaded = 0, ntextures_loaded = 0;
var ct = 0;

var ambientProductLoc;
var diffuseProductLoc;
var specularProductLoc;
var shininessLoc;
var textureLoc;
var renderingoptionLoc;

for (var i = 0; i < numberOfShapes; i++) vaisseau[i] = createNode(null, null, null, null);
for (var i = 0; i < 4; i++) planets[i] = createNode(null, null, null, null);

var eye = vec3(0.0, 0.0, 200);
var at = vec3(0.0, 0.0, 0.0);
var up = vec3(0.0, 1.0, 0.0);
var horizontal = 0;

var texIdARC170;
var texturelist = [];
var texcounter = 0;
var Arc170;

// function normalizeVector(v) {
//     var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
//     return vec3(v[0] / length, v[1] / length, v[2] / length);
// }

// function subtractVectors(a, b) {
//     return vec3(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
// }

// function addVectors(a, b) {
//     return vec3(a[0] + b[0], a[1] + b[1], a[2] + b[2]);
// }

// function scaleVector(s, v) {
//     return vec3(v[0] * s, v[1] * s, v[2] * s);
// }

// function setCamera() {
//     eye = vec3(eye[0], eye[1], eye[2]);
//     at = vec3(horizontal, 0.0, 0.0);
//     var up = vec3(0.0, 1.0, 0.0);
//     modelview = lookAt(eye, at, up);
//     render();
// }

// document.addEventListener('keydown', function(event) {
//     // Calculer le vecteur de direction
//     var direction = normalizeVector(subtractVectors(at, eye));
    
//     switch(event.key) {
//         case 'w':
//         case 'W':
//             // Avancer dans la direction de la caméra
//             eye = addVectors(eye, scaleVector(10, direction));
//             // Mettre à jour at pour maintenir la même direction
//             at = addVectors(at, scaleVector(10, direction));
//             break;
//         case 's':
//         case 'S':
//             // Reculer dans la direction de la caméra
//             eye = subtractVectors(eye, scaleVector(10, direction));
//             // Mettre à jour at pour maintenir la même direction
//             at = subtractVectors(at, scaleVector(10, direction));
//             break;
//         case 'a':
//         case 'A':
//             horizontal -= 10;
//             break;
//         case 'd':
//         case 'D':
//             horizontal += 10;
//             break;
//     }
//     setCamera();
// });

document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'w':
        case 'W':
        case 'ArrowUp':
            // Avancer dans la direction de la caméra
            eye = vec3(eye[0], eye[1], eye[2] - 10);
            break;
        case 'a':
        case 'A':
        case 'ArrowLeft':
            // Déplacer la caméra vers la gauche
            at = vec3(at[0] - 10, at[1], at[2]);
            break;
        case 's':
        case 'S':
        case 'ArrowDown':
            // Reculer dans la direction de la caméra
            eye = vec3(eye[0], eye[1], eye[2] + 10);
            break;
        case 'd':
        case 'D':
        case 'ArrowRight':
            // Déplacer la caméra vers la droite
            at = vec3(at[0] + 10, at[1], at[2]);
            break;
    }
    render();
});

function setDefaultMaterial() {
    materialAmbient = defaultMaterialAmbient;
    materialDiffuse = defaultMaterialDiffuse;
    materialSpecular = defaultMaterialSpecular;
    materialShininess = defaultMaterialShininess;

    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);

    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);
}

function createNode(transform, render, sibling, child){
    var node = {
    transform: transform,
    render: render,
    sibling: sibling,
    child: child,
    }
    return node;
}

function scale4(a, b, c) {
    var result = mat4();
    result[0][0] = a;
    result[1][1] = b;
    result[2][2] = c;
    return result;
 }

 function render() {
    gl.useProgram(progbox);
    var initialModelview = lookAt(eye, at, up);
    
    // Pour la skybox - extraire seulement la rotation 3x3
    var skyboxModelview = mat4();
    // Copier uniquement la partie rotation 3x3 de la matrice de vue
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            skyboxModelview[i][j] = initialModelview[i][j];
        }
    }

    gl.clearColor(0.0, 0.0, 0.0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if (texIDmap0.isloaded) {
        gl.useProgram(progbox);
        gl.uniformMatrix4fv(NormalMatrixLocBox, false, flatten(projection));
        gl.enableVertexAttribArray(CoordsLocBox);

        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texIDmap0);
        gl.uniform1i(skyboxLoc, 0);

        // Utiliser la matrice sans translation pour la skybox
        var oldModelview = modelview;
        modelview = skyboxModelview;
        skybox.render();
        modelview = oldModelview; // Restaurer la matrice originale
    }

    // Continuer avec le reste du rendu utilisant la matrice de vue normale
    gl.useProgram(prog);
    theta[earthId] += 1.0;
    theta[marsId] += 2.0;
    theta[moonId] += 1.0;
    var initialModelview = lookAt(eye, at, up);
    modelview = initialModelview;
    if(ntextures_loaded == ntextures_tobeloaded){
        traverseVaisseau(0);
        traversePlanets(0);

        gl.uniform1i(useTextureLoc, true);
        modelview = mult(initialModelview, translate(-175, 0, 50));
        modelview = mult(modelview, scale(5, 5, 5));
        modelview = mult(modelview, rotate(30, 0, 1, 0));
        modelview = mult(modelview, rotate(30, 1, 0, 0));
        Arc170.render();
        gl.uniform1i(useTextureLoc, false);
    }
}

function unflatten(matrix) {
    var result = mat4();
    result[0][0] = matrix[0]; result[1][0] = matrix[1]; result[2][0] = matrix[2]; result[3][0] = matrix[3];
    result[0][1] = matrix[4]; result[1][1] = matrix[5]; result[2][1] = matrix[6]; result[3][1] = matrix[7];
    result[0][2] = matrix[8]; result[1][2] = matrix[9]; result[2][2] = matrix[10]; result[3][2] = matrix[11];
    result[0][3] = matrix[12]; result[1][3] = matrix[13]; result[2][3] = matrix[14]; result[3][3] = matrix[15];

    return result;
}

function extractNormalMatrix(matrix) { // This function computes the transpose of the inverse of 
    // the upperleft part (3X3) of the modelview matrix (see http://www.lighthouse3d.com/tutorials/glsl-tutorial/the-normal-matrix/ )

    var result = mat3();
    upperleft = mat3();
    var tmp = mat3();

    upperleft[0][0] = matrix[0][0];  // if no scaling is performed, one can simply use the upper left
    upperleft[1][0] = matrix[1][0];  // part (3X3) of the modelview matrix
    upperleft[2][0] = matrix[2][0];

    upperleft[0][1] = matrix[0][1];
    upperleft[1][1] = matrix[1][1];
    upperleft[2][1] = matrix[2][1];

    upperleft[0][2] = matrix[0][2];
    upperleft[1][2] = matrix[1][2];
    upperleft[2][2] = matrix[2][2];

    tmp = matrixinvert(upperleft);
    result = transpose(tmp);

    return result;
}

function matrixinvert(matrix) {

    var result = mat3();

    var det = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) -
                 matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
                 matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);

    var invdet = 1 / det;

    // inverse of matrix m
    result[0][0] = (matrix[1][1] * matrix[2][2] - matrix[2][1] * matrix[1][2]) * invdet;
    result[0][1] = (matrix[0][2] * matrix[2][1] - matrix[0][1] * matrix[2][2]) * invdet;
    result[0][2] = (matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1]) * invdet;
    result[1][0] = (matrix[1][2] * matrix[2][0] - matrix[1][0] * matrix[2][2]) * invdet;
    result[1][1] = (matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0]) * invdet;
    result[1][2] = (matrix[1][0] * matrix[0][2] - matrix[0][0] * matrix[1][2]) * invdet;
    result[2][0] = (matrix[1][0] * matrix[2][1] - matrix[2][0] * matrix[1][1]) * invdet;
    result[2][1] = (matrix[2][0] * matrix[0][1] - matrix[0][0] * matrix[2][1]) * invdet;
    result[2][2] = (matrix[0][0] * matrix[1][1] - matrix[1][0] * matrix[0][1]) * invdet;

    return result;
}

// The following function is used to create an "object" (called "model") containing all the informations needed
// to draw a particular element (sphere, cylinder, cube,...). 
// Note that the function "model.render" is defined inside "createModel" but it is NOT executed.
// That function is only executed when we call it explicitly in render().

function createModel(modelData) {

	// the next line defines an "object" in Javascript
	// (note that there are several ways to define an "object" in Javascript)
	var model = {};
	
	// the following lines defines "members" of the "object"
    model.coordsBuffer = gl.createBuffer();
    model.normalBuffer = gl.createBuffer();
    model.textureBuffer = gl.createBuffer();
    model.indexBuffer = gl.createBuffer();
    model.count = modelData.indices.length;

	// the "members" are then used to load data from "modelData" in the graphic card
    gl.bindBuffer(gl.ARRAY_BUFFER, model.coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, modelData.vertexPositions, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, model.normalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, modelData.vertexNormals, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, model.textureBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, modelData.vertexTextureCoords, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, modelData.indices, gl.STATIC_DRAW);

	// The following function is NOT executed here. It is only DEFINED to be used later when we
	// call the ".render()" method.
    model.render = function () {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.coordsBuffer);
        gl.vertexAttribPointer(CoordsLoc, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
        gl.vertexAttribPointer(NormalLoc, 3, gl.FLOAT, false, 0, 0);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer);
        gl.vertexAttribPointer(TexCoordLoc, 2, gl.FLOAT, false, 0, 0);

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

        //gl.uniformMatrix4fv(ModelviewLoc, false, flatten(modelview));    //--- load flattened modelview matrix
        //gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));  //--- load flattened normal matrix

        gl.drawElements(gl.TRIANGLES, this.count, gl.UNSIGNED_SHORT, 0);
        //console.log(this.count);
    }
	
	// we now return the "object".
    return model;
}

function createModelbox(modelData) {  // For creating the environment box.
    var model = {};
    model.coordsBuffer = gl.createBuffer();
    model.indexBuffer = gl.createBuffer();
    model.count = modelData.indices.length;
    gl.bindBuffer(gl.ARRAY_BUFFER, model.coordsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, modelData.vertexPositions, gl.STATIC_DRAW);
    console.log(modelData.vertexPositions.length);
    console.log(modelData.indices.length);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, modelData.indices, gl.STATIC_DRAW);
    model.render = function () {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.coordsBuffer);
        gl.vertexAttribPointer(CoordsLocBox, 3, gl.FLOAT, false, 0, 0);
        gl.uniformMatrix4fv(ModelviewLocBox, false, flatten(modelview));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.drawElements(gl.TRIANGLES, this.count, gl.UNSIGNED_SHORT, 0);
    }
    return model;
}

function createProgram(gl, vertexShaderSource, fragmentShaderSource) {
    var vsh = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vsh, vertexShaderSource);
    gl.compileShader(vsh);
    if (!gl.getShaderParameter(vsh, gl.COMPILE_STATUS)) {
        throw "Error in vertex shader:  " + gl.getShaderInfoLog(vsh);
    }
    var fsh = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fsh, fragmentShaderSource);
    gl.compileShader(fsh);
    if (!gl.getShaderParameter(fsh, gl.COMPILE_STATUS)) {
        throw "Error in fragment shader:  " + gl.getShaderInfoLog(fsh);
    }
    var prog = gl.createProgram();
    gl.attachShader(prog, vsh);
    gl.attachShader(prog, fsh);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw "Link error in program:  " + gl.getProgramInfoLog(prog);
    }
    return prog;
}


function getTextContent(elementID) {
    var element = document.getElementById(elementID);
    var fsource = "";
    var node = element.firstChild;
    var str = "";
    while (node) {
        if (node.nodeType == 3) // this is a text node
            str += node.textContent;
        node = node.nextSibling;
    }
    return str;
}

window.onload = function init() {
    try {
        canvas = document.getElementById("glcanvas");
        gl = canvas.getContext("webgl");
        if (!gl) {
            gl = canvas.getContext("experimental-webgl");
        }
        if (!gl) {
            throw "Could not create WebGL context.";
        }

        // LOAD SHADER (for the skybox)
        var vertexShaderSource = getTextContent("vshaderbox");
        var fragmentShaderSource = getTextContent("fshaderbox");
        progbox = createProgram(gl, vertexShaderSource, fragmentShaderSource);

        gl.useProgram(progbox);

        CoordsLocBox = gl.getAttribLocation(progbox, "vcoords");

        ModelviewLocBox = gl.getUniformLocation(progbox, "modelview");
        NormalMatrixLocBox = gl.getUniformLocation(progbox, "projection");

        skyboxLoc = gl.getUniformLocation(progbox, "skybox");

        // LOAD SHADER (standard texture mapping)
        var vertexShaderSource = getTextContent("vshader");
        var fragmentShaderSource = getTextContent("fshader");
        prog = createProgram(gl, vertexShaderSource, fragmentShaderSource);

        gl.useProgram(prog);

        // locate variables for further use
        CoordsLoc = gl.getAttribLocation(prog, "vcoords");
        NormalLoc = gl.getAttribLocation(prog, "vnormal");
        TexCoordLoc = gl.getAttribLocation(prog, "vtexcoord");

        u_textureLoc = gl.getUniformLocation(prog, "texture");
        useTextureLoc = gl.getUniformLocation(prog, "useTexture");

        ModelviewLoc = gl.getUniformLocation(prog, "modelview");
        ProjectionLoc = gl.getUniformLocation(prog, "projection");
        NormalMatrixLoc = gl.getUniformLocation(prog, "normalMatrix");
        renderingoptionLoc = gl.getUniformLocation(prog, "renderingoption");

        gl.enableVertexAttribArray(CoordsLoc);
        gl.enableVertexAttribArray(NormalLoc);
		gl.disableVertexAttribArray(TexCoordLoc);  // we do not need texture coordinates

        gl.enable(gl.DEPTH_TEST);

        setDefaultMaterial();
        
		gl.uniform4fv(gl.getUniformLocation(prog, "lightPosition"), flatten(lightPosition));

		projection = perspective(70.0, 1.0, 1.0, 4000.0);
		gl.uniformMatrix4fv(ProjectionLoc, false, flatten(projection));  // send projection matrix to the shader program
		
		// In the following lines, we create different "elements" (sphere, cylinder, box, disk,...).
		// These elements are "objects" returned by the "createModel()" function.
		// The "createModel()" function requires one parameter which contains all the information needed
		// to create the "object". The functions "uvSphere()", "uvCylinder()", "cube()",... are described
		// in the file "basic-objects-IFS.js". They return an "object" containing vertices, normals, 
		// texture coordinates and indices.
		// 

        initTexture();
		
        gl.useProgram(progbox);
        skybox = createModelbox(cube(2000));

        gl.useProgram(prog);

        sphere = createModel(uvSphere(10.0, 25.0, 25.0));
        cylinder = createModel(uvCylinder(10.0, 20.0, 25.0, false, false));
        cylinderOpen = createModel(uvCylinder(10.0, 20.0, 25.0, true, false));
        box = createModel(cube(10.0));

		teapot = createModel(teapotModel);
        disk = createModel(ring(5.0, 10.0, 25.0));
        torus = createModel(uvTorus(15.0, 5.0, 25.0, 25.0));
        cone = createModel(uvCone(10.0, 20.0, 25.0, true));

		hemisphereinside = createModel(uvHemisphereInside(10.0, 25.0, 25.0));
		hemisphereoutside = createModel(uvHemisphereOutside(10.0, 25.0, 25.0));
        thindisk = createModel(ring(9.5, 10.0, 25.0));

		quartersphereinside = createModel(uvQuartersphereInside(10.0, 25.0, 25.0));
		quartersphereoutside = createModel(uvQuartersphereOutside(10.0, 25.0, 25.0));
        triangleBasePrism = createModel(uvTriangularPrism(10.0, 10.0));
        triangleBasePrismRectangle = createModel(uvTriangularPrismRectangle(10,10));

        //triangle = createModel(uvTriangle());

		// managing arrow keys (to move up or down the model)
		document.onkeydown = function (e) {
			switch (e.key) {
				case 'Home':
					// resize the canvas to the current window width and height
					resize(canvas);
					break;
			}
		};

    }
    catch (e) {
        document.getElementById("message").innerHTML =
             "Could not initialize WebGL: " + e;
        return;
    }

	window.addEventListener("resize", onresize);

   	onresize();  // size the canvas to the current window width and height
    
    for(i=0; i<numberOfShapes; i++) initNodes(i);
    for(i=0; i<4; i++){
        initPlanets(i);
        theta[i] = 0.0;
    }
    
    gl.useProgram(prog);
    Arc170 = createModelFromObjFile(ExtractDataFromOBJ("star-wars-arc-170-pbr.obj"));
    setInterval(render, 50);
}

function handleLoadedTextureFromObjFile(texturelist,Id) {
    console.log("Texture loaded for ID:", Id);
    gl.bindTexture(gl.TEXTURE_2D, texturelist[Id]);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texturelist[Id].image);
	gl.generateMipmap( gl.TEXTURE_2D );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR );

	ntextures_loaded++;
    //render();  // Call render function when the image has been loaded (to insure the model is displayed)

    gl.bindTexture(gl.TEXTURE_2D, null);
}

function handleLoadedTexture(texture) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.generateMipmap(gl.TEXTURE_2D);

    ntextures_loaded++;

    //render();  // Call render function when the image has been loaded (to make sure the model is displayed)

    gl.bindTexture(gl.TEXTURE_2D, null);
}

function handleLoadedTextureMap(texture) {

    ct++;
    if (ct == 6) {
        gl.bindTexture(gl.TEXTURE_CUBE_MAP, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        var targets = [
           gl.TEXTURE_CUBE_MAP_POSITIVE_X, gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
           gl.TEXTURE_CUBE_MAP_POSITIVE_Y, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
           gl.TEXTURE_CUBE_MAP_POSITIVE_Z, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z
        ];
        for (var j = 0; j < 6; j++) {
            gl.texImage2D(targets[j], 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img[j]);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        }
        gl.generateMipmap(gl.TEXTURE_CUBE_MAP);

        texture.isloaded = true;

        render();  // Call render function when the image has been loaded (to insure the model is displayed)

        gl.bindTexture(gl.TEXTURE_2D, null);
    }
}

function initTexture() {
    texID1 = gl.createTexture();
    texID1.image = new Image();
    texID1.image.onload = function () {
        handleLoadedTexture(texID1)
    }
    texID1.image.src = "../Common/Textures/texR2d2.jpg";
    ntextures_tobeloaded++;

    texID2 = gl.createTexture();
    texID2.image = new Image();
    texID2.image.onload = function () {
        handleLoadedTexture(texID2)
    }
    texID2.image.src = "../Common/Textures/basicTexture.jpg";
    ntextures_tobeloaded++;

    texID3 = gl.createTexture();
    texID3.image = new Image();
    texID3.image.onload = function () {
        handleLoadedTexture(texID3)
    }
    texID3.image.src = "../Common/Textures/moteur_1.jpg";
    ntextures_tobeloaded++;

    texID4 = gl.createTexture();
    texID4.image = new Image();
    texID4.image.onload = function () {
        handleLoadedTexture(texID4)
    }
    texID4.image.src = "../Common/Textures/1.jpg";
    ntextures_tobeloaded++;

    texID5 = gl.createTexture();
    texID5.image = new Image();
    texID5.image.onload = function () {
        handleLoadedTexture(texID5)
    }
    texID5.image.src = "../Common/Textures/metal.png";
    ntextures_tobeloaded++;

    texIdARC170 = gl.createTexture();

    texIdARC170.image = new Image();
    texIdARC170.image.onload = function () {
        handleLoadedTexture(texIdARC170)
    }

    texIdARC170.image.src = "../Common/Textures/SA2011_black.gif";
	ntextures_tobeloaded++;

    var urls = [
        "space/nebula_posx.png", "space/nebula_negx.png",
        "space/nebula_posy.png", "space/nebula_negy.png",
        "space/nebula_posz.png", "space/nebula_negz.png"
    ];

    texIDmap0 = gl.createTexture();
    texIDmap0.isloaded = false;  // this class member is created only to check if the image has been loaded

    for (var i = 0; i < 6; i++) {
        img[i] = new Image();
        img[i].onload = function () {  // this function is called when the image download is complete

            handleLoadedTextureMap(texIDmap0);
        }
        img[i].src = urls[i];   // this line starts the image downloading thread

    }

    // TEXTURE POUR LES PLANÈTES
    texID6 = gl.createTexture();
    texID6.image = new Image();
    texID6.image.onload = function () {
        handleLoadedTexture(texID6)
    }
    texID6.image.src = "../Common/Textures/terre.jpg";
    ntextures_tobeloaded++;

    texID7 = gl.createTexture();
    texID7.image = new Image();
    texID7.image.onload = function () {
        handleLoadedTexture(texID7)
    }
    texID7.image.src = "../Common/Textures/lune.jpg";
    ntextures_tobeloaded++;

    texID8 = gl.createTexture();
    texID8.image = new Image();
    texID8.image.onload = function () {
        handleLoadedTexture(texID8)
    }
    texID8.image.src = "../Common/Textures/mars.jpg";
    ntextures_tobeloaded++;
}

function onresize() {  // ref. https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
  var realToCSSPixels = window.devicePixelRatio;

  var actualPanelWidth = Math.floor(window.innerWidth * 0.85);  // note that right panel is 85% of window width 
  var actualPanelHeight = Math.floor(window.innerHeight - 30);
  
  var minDimension = Math.min(actualPanelWidth, actualPanelHeight);
    
   // Ajust the canvas to this dimension (square)
    canvas.width  = minDimension;
    canvas.height = minDimension;
	
	gl.viewport(0, 0, canvas.width, canvas.height);

}

function createModelFromObjFile(ptr) {
	
	var i;
    var model = {};
	
	model.numberofelements = ptr.numberofelements;
	model.coordsBuffer = [];
	model.normalBuffer = [];
	model.textureBuffer = [];
	model.indexBuffer = [];
	model.count = [];
	model.Ka = [];
	model.Kd = [];
	model.Ks = [];
	model.Ns = [];
	model.textureFile = [];
	model.texId = [];

	
	for(i=0; i < ptr.numberofelements; i++){
	
		model.coordsBuffer.push( gl.createBuffer() );
		model.normalBuffer.push( gl.createBuffer() );
		model.textureBuffer.push( gl.createBuffer() );
		model.indexBuffer.push( gl.createBuffer() );
		model.count.push( ptr.list[i].indices.length );
	
		gl.bindBuffer(gl.ARRAY_BUFFER, model.coordsBuffer[i]);
		gl.bufferData(gl.ARRAY_BUFFER, ptr.list[i].vertexPositions, gl.STATIC_DRAW);
		gl.bindBuffer(gl.ARRAY_BUFFER, model.normalBuffer[i]);
		gl.bufferData(gl.ARRAY_BUFFER, ptr.list[i].vertexNormals, gl.STATIC_DRAW);
		gl.bindBuffer(gl.ARRAY_BUFFER, model.textureBuffer[i]);
		gl.bufferData(gl.ARRAY_BUFFER, ptr.list[i].vertexTextureCoords, gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model.indexBuffer[i]);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, ptr.list[i].indices, gl.STATIC_DRAW);
		
		model.Ka.push(ptr.list[i].material.Ka);
		model.Kd.push(ptr.list[i].material.Kd);
		model.Ks.push(ptr.list[i].material.Ks);
		model.Ns.push(ptr.list[i].material.Ns);  // shininess
		
		// if a texture file has been defined for this element
		if(ptr.list[i].material.map != ""){
			
			// Check if the filename is present in the texture list
			var texindex = model.textureFile.indexOf(ptr.list[i].material.map);
			if( texindex > -1){ // texture file previously loaded
				// store the texId of the previously loaded file
				model.texId.push(model.texId[texindex]);
			}
			else { // new texture file to load
				// store current texture counter (will be used when rendering the scene)
				model.texId.push(texcounter);
			
				// add a new image buffer to the texture list
				texturelist.push(gl.createTexture());
				if(texcounter < 70){
					texturelist[texcounter].image = new Image();
					
					if(texcounter == 0){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,0)
						}
					}
					else if(texcounter == 1){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,1)
						}
					}
					else if(texcounter == 2){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,2)
						}
					}
					else if(texcounter == 3){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,3)
						}
					}
					else if(texcounter == 4){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,4)
						}
					}
					else if(texcounter == 5){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,5)
						}
					}
					else if(texcounter == 6){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,6)
						}
					}
					else if(texcounter == 7){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,7)
						}
					}
					else if(texcounter == 8){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,8)
						}
					}
					else if(texcounter == 9){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,9)
						}
					}
					else if(texcounter == 10){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,10)
						}
					}
					else if(texcounter == 11){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,11)
						}
					}
					else if(texcounter == 12){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,12)
						}
					}
					else if(texcounter == 13){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,13)
						}
					}
					else if(texcounter == 14){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,14)
						}
					}
					else if(texcounter == 15){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,15)
						}
					}
					else if(texcounter == 16){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,16)
						}
					}
					else if(texcounter == 17){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,17)
						}
					}
					else if(texcounter == 18){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,18)
						}
					}
					else if(texcounter == 19){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,19)
						}
					}
					else if(texcounter == 20){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,20)
						}
					}
					else if(texcounter == 21){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,21)
						}
					}
					else if(texcounter == 22){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,22)
						}
					}
					else if(texcounter == 23){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,23)
						}
					}
					else if(texcounter == 24){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,24)
						}
					}
					else if(texcounter == 25){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,25)
						}
					}
					else if(texcounter == 26){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,26)
						}
					}
					else if(texcounter == 27){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,27)
						}
					}
					else if(texcounter == 28){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,28)
						}
					}
					else if(texcounter == 29){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,29)
						}
					}
					else if(texcounter == 30){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,30)
						}
					}
					else if(texcounter == 31){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,31)
						}
					}
					else if(texcounter == 32){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,32)
						}
					}
					else if(texcounter == 33){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,33)
						}
					}
					else if(texcounter == 34){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,34)
						}
					}
					else if(texcounter == 35){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,35)
						}
					}
					else if(texcounter == 36){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,36)
						}
					}
					else if(texcounter == 37){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,37)
						}
					}
					else if(texcounter == 38){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,38)
						}
					}
					else if(texcounter == 39){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,39)
						}
					}
					else if(texcounter == 40){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,40)
						}
					}
					else if(texcounter == 41){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,41)
						}
					}
					else if(texcounter == 42){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,42)
						}
					}
					else if(texcounter == 43){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,43)
						}
					}
					else if(texcounter == 44){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,44)
						}
					}
					else if(texcounter == 45){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,45)
						}
					}
					else if(texcounter == 46){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,46)
						}
					}
					else if(texcounter == 47){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,47)
						}
					}
					else if(texcounter == 48){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,48)
						}
					}
					else if(texcounter == 49){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,49)
						}
					}
					else if(texcounter == 50){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,50)
						}
					}
					else if(texcounter == 51){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,51)
						}
					}
					else if(texcounter == 52){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,52)
						}
					}
					else if(texcounter == 53){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,53)
						}
					}
					else if(texcounter == 54){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,54)
						}
					}
					else if(texcounter == 55){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,55)
						}
					}
					else if(texcounter == 56){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,56)
						}
					}
					else if(texcounter == 57){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,57)
						}
					}
					else if(texcounter == 58){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,58)
						}
					}
					else if(texcounter == 59){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,59)
						}
					}
					else if(texcounter == 60){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,60)
						}
					}
					else if(texcounter == 61){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,61)
						}
					}
					else if(texcounter == 62){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,62)
						}
					}
					else if(texcounter == 63){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,63)
						}
					}
					else if(texcounter == 64){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,64)
						}
					}
					else if(texcounter == 65){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,65)
						}
					}
					else if(texcounter == 66){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,66)
						}
					}
					else if(texcounter == 67){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,67)
						}
					}
					else if(texcounter == 68){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,68)
						}
					}
					else if(texcounter == 69){  // associate a FIXED callback function to each texture Id
						texturelist[texcounter].image.onload = function () {
							handleLoadedTextureFromObjFile(texturelist,69)
						}
					}
					
					if(texcounter < 70){
						texturelist[texcounter].image.src = ptr.list[i].material.map;
						ntextures_tobeloaded++;					
					}

					// increment counter
					texcounter ++;
				} // if(texcounter<70)
			} // else				
		} // if(ptr.list[i].material.map != ""){
		else { // if there is no texture file associated to this element
			// store a null value (it will NOT be used when rendering the scene)
			model.texId.push(null);
		}
			
		// store the filename for every element even if it is empty ("")
		model.textureFile.push(ptr.list[i].material.map);		
		
	} // for(i=0; i < ptr.numberofelements; i++){
	
	model.render = function () {
		for(i=0; i < this.numberofelements; i++){
			
			gl.bindBuffer(gl.ARRAY_BUFFER, this.coordsBuffer[i]);
			gl.vertexAttribPointer(CoordsLoc, 3, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer[i]);
			gl.vertexAttribPointer(NormalLoc, 3, gl.FLOAT, false, 0, 0);
			gl.bindBuffer(gl.ARRAY_BUFFER, this.textureBuffer[i]);
			gl.vertexAttribPointer(TexCoordLoc, 2, gl.FLOAT, false, 0, 0);

			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer[i]);

			gl.uniformMatrix4fv(ModelviewLoc, false, flatten(modelview));    //--- load flattened modelview matrix
			gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));  //--- load flattened normal matrix

			ambientProduct = mult(lightAmbient, vec4(this.Ka[i],1.0));
			diffuseProduct = mult(lightDiffuse, vec4(this.Kd[i],1.0));
			specularProduct = mult(lightSpecular, vec4(this.Ks[i],1.0));
			materialShininess = this.Ns[i];

			gl.uniform4fv(ambientProductLoc, flatten(ambientProduct));
			gl.uniform4fv(diffuseProductLoc, flatten(diffuseProduct));
			gl.uniform4fv(specularProductLoc, flatten(specularProduct));
			gl.uniform1f(shininessLoc, materialShininess);

			if(this.textureFile[i] != ""){
				gl.enableVertexAttribArray(TexCoordLoc);				
				gl.activeTexture(gl.TEXTURE0);
				gl.bindTexture(gl.TEXTURE_2D, texturelist[model.texId[i]]);
			
				// Send texture number to sampler
				gl.uniform1i(u_textureLoc, 0);
				
				// assign "2" to renderingoption in fragment shader
				gl.uniform1i(renderingoptionLoc, 2);
			}
			else{
				gl.disableVertexAttribArray(TexCoordLoc);
				// assign "0" to renderingoption in fragment shader
				gl.uniform1i(renderingoptionLoc, 0);				
			}
			
			gl.drawElements(gl.TRIANGLES, this.count[i], gl.UNSIGNED_SHORT, 0);
		}
	}
	
    return model;
}