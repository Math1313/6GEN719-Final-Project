var vertices = [];
var pointsArray = [];
var normalsArray = [];

var earthId = 0;
var moonId = 1;
var marsId = 2;

function initPlanets(Id) {

    var m = mat4();
    
    switch(Id) {
    /**
     * 
     * CENTER CASE
     * 
     */
    case earthId:
        planets[earthId] = createNode(m, earth, marsId, moonId);
        break;
    case moonId:
        planets[moonId] = createNode(m, moon, null, null);
        break;
    case marsId:
        planets[marsId] = createNode(m, mars, null, null);
        break;
    }
    
}

function traversePlanets(Id) {
    if(Id == null) return; 
    stack.push(modelview);
    modelview = mult(modelview, planets[Id].transform);
    planets[Id].render();
    if(planets[Id].child != null) traversePlanets(planets[Id].child); 
    modelview = stack.pop();
    if(planets[Id].sibling != null) traversePlanets(planets[Id].sibling); 
}

function earth()
{
    gl.uniform1i(useTextureLoc, true);
    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texID6);
    gl.uniform1i(u_textureLoc, 1);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(100, 0, 150));
    instanceMatrix = mult(instanceMatrix, rotate(-90, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, rotate(theta[earthId], 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4( 1, 1, 1));
    
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.8, 0.8, 0.8, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    sphere.render();

    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
    gl.uniform1i(useTextureLoc, false);
}

function moon() {
    gl.uniform1i(useTextureLoc, true);
    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texID7);
    gl.uniform1i(u_textureLoc, 1);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    // Rotation de la lune autour de la terre
    var orbitRadius = 25.0; // Rayon de l'orbite de la lune autour de la terre
    var orbitMatrix = mult(translate(100, 0, 150), rotate(theta[moonId], 0, 1, 0));
    var moonPosition = mult(orbitMatrix, translate(orbitRadius, 0, 0));

    // Rotation de la lune sur elle-même
    var selfRotationMatrix = rotate(theta[moonId], 0, 1, 0);

    instanceMatrix = mult(modelview, moonPosition);
    instanceMatrix = mult(instanceMatrix, selfRotationMatrix);
    instanceMatrix = mult(instanceMatrix, scale4(0.5, 0.5, 0.5));
    
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4(0.8, 0.8, 0.8, 1.0);
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    sphere.render();

    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
    gl.uniform1i(useTextureLoc, false);
}

function mars()
{
    gl.uniform1i(useTextureLoc, true);
    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texID8);
    gl.uniform1i(u_textureLoc, 1);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(75, 0, 100));
    instanceMatrix = mult(instanceMatrix, rotate(-90, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, rotate(theta[marsId], 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4( 1.2, 1.2, 1.2));
    
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.8, 0.8, 0.8, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    sphere.render();

    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
    gl.uniform1i(useTextureLoc, false);
}