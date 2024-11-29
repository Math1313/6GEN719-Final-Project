var centerThinkness = 0.05;
var centerWidth = 1;
var centerLenght = 2;
var vertices = [];
var pointsArray = [];
var normalsArray = [];

const topOfCenterId = 0;
const sideOfCenterLeftId = 1;
const sideOfCenterRightId = 2;
const sideOfCenterBottomRightId = 3;
const sideOfCenterBottomLeftId = 4;
const bottomOfCenterId = 5;
const wingAttachmentId = 6;
const reactorBaseId = 7;
const reactorBigPartId = 8;
const reactorBigPartSleeveId = 9;
const reactorMiddlePartId = 10;
const reactorMiddlePartExtendedId = 11;
const reactorHalfCircleCapId = 12;
const reactorInsidePartId = 13;
const baseToWingId = 14;
const fillBaseToWingId = 15;
const wingAngledSideId = 16;
const wingMainPartId = 17;
const weaponBaseId = 18;
const weaponBigPartId = 19;
const weaponMiddlePartId = 20;
const weaponFarPartId = 21;
const weaponRoundTipId = 22;
const weaponClampId = 23;
const weapongEndId = 24;
const weapongBigPartSleeveId = 25;
const weapongSquareDetailId = 26;
const weaponRoundId = 27;
const cockpitPart1Id = 28;
const cockpitPart2Id = 29;
const nosePart1Id = 30;
const nosePart2Id = 31;
const nosePart3Id = 32;
const wingDetailBigId = 33;
const wingDetailBaseId = 34;
const wingDetailBase2Id = 35;
const wingDetailMiddleId = 36;
const wingDetailTopId = 37;
const cockpitToNoseTriangle1Id = 38;
const cockpitToNoseTriangle2Id = 39;
const cockpitToNoseFillId = 40;
const nosePartTriangle1Id = 41;
const nosePartTriangle3Id = 42;
const nosePartTriangleEndId = 43;
const noseBottomExtensionId = 44;
const noseBottomId = 45;
const noseBottomTriangleLeftId = 46;
const noseBottomTriangleRightId = 47;
const noseBottomTriangleLeft1Id = 48;
const noseBottomTriangleRight1Id = 49;
const cockpitPartLeft2Id = 50;
const cockpitPartRight2Id = 51;
const backSideTopId = 52;
const backSideBottomId = 53;
const backTriangleLeftId = 54;
const backTriangleRightId = 55;
const backSquareId = 56;
const backSideSideId = 57;
const backSideLittleTriangleId = 58;
const backSideBigTriangleId = 59;
const tipBottomId = 60;
const tipBottomMiddleId = 61;
const tipBottomEndId = 62;
const tipTopId = 63;
const tipTopMiddleId = 64;
const tipTopEndId = 65;
const backTopLeftTriangleId = 66;
const backTopRightTriangleId = 67;
const backBottomLeftTriangleId = 68;
const backBottomRightTriangleId = 69;
const cockpitTriangleLeft1Id = 70;
const cockpitTriangleRight1Id = 71;
const cockpitTriangleLeft2Id = 72;
const cockpitTriangleRight2Id = 73;
const tipSideLeftId = 74;
const tipSideRightId = 75;
const tipTriangleLeftId = 76;
const tipTriangleRightId = 77;
const tipSquareLeftId = 78;
const tipSquareLeftTopTriangleId = 79;
const tipSquareLeftBottomTriangleId = 80;
const tipSquareRightTopTriangleId = 81;
const tipSquareRightBottomTriangleId = 82;
const tipSquareRightId = 83;
const tipSideId = 84;
const droideId = 85;



function initNodes(Id) {

    var m = mat4();
    
    switch(Id) {
    /**
     * 
     * CENTER CASE
     * 
     */
    case topOfCenterId:
        vaisseau[topOfCenterId] = createNode(m, topBottomOfCenter, sideOfCenterLeftId, cockpitPart1Id);
        break;
    case sideOfCenterLeftId:
        m = translate(-6, -3, 0);
        m = mult(m, rotate(70, 0, 0, 1));
        vaisseau[sideOfCenterLeftId] = createNode(m, sideOfCenter, sideOfCenterRightId, wingAttachmentId);
        break;
    case sideOfCenterRightId:
        m = translate(6, -3, 0);
        m = mult(m, rotate(290, 0, 0, 1));
        m = mult(m, scale4(-1, 1, 1));
        vaisseau[sideOfCenterRightId] = createNode(m, sideOfCenter, sideOfCenterBottomRightId, wingAttachmentId);
        break;
    case sideOfCenterBottomRightId:
        m = translate(6, -9, 0);
        m = mult(m, rotate(70, 0, 0, 1));
        m = mult(m, rotate(180, 0, 1, 0));
        m = mult(m, rotate(180, 1, 0, 0));
        vaisseau[sideOfCenterBottomRightId] = createNode(m, sideOfCenter, sideOfCenterBottomLeftId, wingAttachmentId);
        break;
    case sideOfCenterBottomLeftId:
        m = translate(-6, -9, 0);
        m = mult(m, rotate(110, 0, 0, 1));
        m = mult(m, scale4(-1, 1, 1));
        vaisseau[sideOfCenterBottomLeftId] = createNode(m, sideOfCenter, bottomOfCenterId, wingAttachmentId);
        break;
    case bottomOfCenterId:
        m = translate(0, -12, 0);
        vaisseau[bottomOfCenterId] = createNode(m, topBottomOfCenter, backSideTopId, null);
        break;
    case droideId:
        vaisseau[droideId] = createNode(m, droide, null, null);
    /*
     *
     * BACK CASE
     * 
     */
    case backSideTopId:
        vaisseau[backSideTopId] = createNode(m, backSideTop, backSideBottomId, null);
        break;
    case backSideBottomId:
        m = translate(0, -12, 0);
        vaisseau[backSideBottomId] = createNode(m, backSideBottom, backTriangleLeftId, null);
        break;
    case backSideSideId:
        m = translate(0,0,-10)
        vaisseau[backSideSideId] = createNode(m, backSideSide, backSideLittleTriangleId, null);
        break;
    case backTriangleLeftId:
        m = translate(0,0,-10)
        vaisseau[backTriangleLeftId] = createNode(m, backTriangleLeft, backTriangleRightId, null);
        break;
    case backTriangleRightId:
        m = translate(0,0,-10)
        vaisseau[backTriangleRightId] = createNode(m, backTriangleRight, backSideBigTriangleId, null);
        break;
    case backSideBigTriangleId:
        m = translate(0,0,-10)
        vaisseau[backSideBigTriangleId] = createNode(m, backSideBigTriangle, backSquareId, null);
        break;
    case backSideLittleTriangleId:
        m = translate(0,0,-10)
        vaisseau[backSideLittleTriangleId] = createNode(m, backSideLittleTriangle, null, null);
        break;
    case backSquareId:
        m = translate(0,0,-10)
        vaisseau[backSquareId] = createNode(m, backSquare, backTopLeftTriangleId, null);
        break;
    case backTopLeftTriangleId:
        vaisseau[backTopLeftTriangleId] = createNode(m, backTopLeftTriangle, backTopRightTriangleId, null);
        break;
    case backTopRightTriangleId:
        vaisseau[backTopRightTriangleId] = createNode(m, backTopRightTriangle, backBottomLeftTriangleId, null);
        break;
    case backBottomLeftTriangleId:
        m = translate(0, -12, 0);
        vaisseau[backBottomLeftTriangleId] = createNode(m, backBottomLeftTriangle, backBottomRightTriangleId, null);
        break;
    case backBottomRightTriangleId:
        m = translate(0, -12, 0);
        vaisseau[backBottomRightTriangleId] = createNode(m, backBottomRightTriangle, droideId, null);
        break;
        
    /**
     * 
     * REACTOR CASE
     * 
     */
    case reactorBaseId:
        m = translate(0, 4, 0);
        vaisseau[reactorBaseId] = createNode(m, reactorBase, reactorBigPartId, baseToWingId);
        break;
    case reactorBigPartId:
        m = translate(2, 4, 3);
        vaisseau[reactorBigPartId] = createNode(m, reactorBigPart, null, reactorBigPartSleeveId);
        break;
    case reactorBigPartSleeveId:
        m = scale4(1.1, 1.1, 0.6);
        vaisseau[reactorBigPartSleeveId] = createNode(m, reactorBigPartSleeve, reactorMiddlePartId, null);
        break;
    case reactorMiddlePartId:
        m = translate(1, 0, -10);
        vaisseau[reactorMiddlePartId] = createNode(m, reactorMiddlePart, reactorMiddlePartExtendedId, null);
        break;
    case reactorMiddlePartExtendedId:
        m = translate(1, 0, -15);
        m = mult(m, scale4(1.1, 1.1, 0.6));
        vaisseau[reactorMiddlePartExtendedId] = createNode(m, reactorMiddlePartExtended, reactorHalfCircleCapId, null);
        break;
    case reactorHalfCircleCapId:
        m = translate(0, 0, 6);
        vaisseau[reactorHalfCircleCapId] = createNode(m, reactorHalfCircleCap, reactorInsidePartId, null);
        break;
    case reactorInsidePartId:
        m = translate(2, 0, 7);
        vaisseau[reactorInsidePartId] = createNode(m, reactorInsidePart, null, null);
        break;
    /**
     * 
     * WING CASE
     * 
     */
    case wingAttachmentId:
        m = translate(0, 0.75, 0);
        vaisseau[wingAttachmentId] = createNode(m, wingAttachment, nosePart1Id, reactorBaseId);
        break;
    case baseToWingId:
        m = translate(0.1, 0, 0);
        vaisseau[baseToWingId] = createNode(m, baseToWing, fillBaseToWingId, wingAngledSideId);
        break;
    case fillBaseToWingId:
        m = translate(-1, 3, 0);
        vaisseau[fillBaseToWingId] = createNode(m, fillBaseToWing, null, null);
        break;
    case wingAngledSideId:
        m = translate(-1.3, 3, -6);
        vaisseau[wingAngledSideId] = createNode(m, wingAngledSide, null, wingMainPartId);
        break;
    case wingMainPartId:
        m = translate(0, 16, 8);
        vaisseau[wingMainPartId] = createNode(m, wingMainPart, wingDetailBigId, weaponBaseId);
        break;
    case wingDetailBigId:
        m = translate(0.25, 20, 5);
        vaisseau[wingDetailBigId] = createNode(m, wingBigDetail, wingDetailBaseId, null);
        break;
    case wingDetailBaseId:
        m = translate(0.25, 5.5, 5);
        vaisseau[wingDetailBaseId] = createNode(m, wingDetailBase, wingDetailBase2Id, null);
        break;
    case wingDetailBase2Id:
        m = translate(0.25, 8, 3.5);
        vaisseau[wingDetailBase2Id] = createNode(m, wingDetailBase2, wingDetailMiddleId, null);
        break;
    case wingDetailMiddleId:
        m = translate(0.5, 5.5, 3.5);
        vaisseau[wingDetailMiddleId] = createNode(m, wingDetailMiddle, wingDetailTopId, null);
        break;
    case wingDetailTopId:
        m = translate(0.75, 5.5, 3.5);
        vaisseau[wingDetailTopId] = createNode(m, wingDetailTop, null, null);
        break;
    /**
     * 
     * WEAPON CASE
     * 
     */
    case weaponBaseId:
        m = translate(1.4, 13, 0)
        vaisseau[weaponBaseId] = createNode(m, weaponBase, null, weaponBigPartId);
        break;
    case weaponBigPartId:
        m = translate(1.1, 0, 0)
        vaisseau[weaponBigPartId] = createNode(m, weaponBigPart, weaponMiddlePartId, null);
        break;
    case weaponMiddlePartId:
        m = translate(1.1, 0, 12)
        vaisseau[weaponMiddlePartId] = createNode(m, weaponMiddlePart, weaponFarPartId, null);
        break;
    case weaponFarPartId:
        m = translate(1.1, 0, 24)
        vaisseau[weaponFarPartId] = createNode(m, weaponFarPart, weaponRoundTipId, null);
        break;
    case weaponRoundTipId:
        m = translate(1.1, 0, 39)
        vaisseau[weaponRoundTipId] = createNode(m, weaponRoundTip, weapongEndId, null);
        break;
    case weaponClampId:
        m = translate(1.1, 0, 24)
        vaisseau[weaponClampId] = createNode(m, weaponClamp, null, null);
        break;
    case weapongEndId:
        m = translate(1.1, 0, 42)
        vaisseau[weapongEndId] = createNode(m, weapongEnd, weapongBigPartSleeveId, null);
        break;
    case weapongBigPartSleeveId:
        m = translate(1.1, 0, -5)
        vaisseau[weapongBigPartSleeveId] = createNode(m, weaponBigPartSleeve, weapongSquareDetailId, null);
        break;
    case weapongSquareDetailId:
        m = translate(1.1, 1.6, -5)
        vaisseau[weapongSquareDetailId] = createNode(m, weaponSquareDetail, weaponRoundId, null);
        break;
    case weaponRoundId:
        m = translate(1.1, 0, 10.5)
        vaisseau[weaponRoundId] = createNode(m, weaponRoundTip, null, null);
        break;
    /**
     * 
     * COCKPIT CASE
     * 
     */
    case cockpitPart1Id:
        vaisseau[cockpitPart1Id] = createNode(m, cockpitPart1, cockpitPart2Id, null);
        break;
    case cockpitPart2Id:
        vaisseau[cockpitPart2Id] = createNode(m, cockpitPart2, cockpitToNoseTriangle1Id, cockpitPartLeft2Id);
        break;
    case cockpitPartLeft2Id:
        vaisseau[cockpitPartLeft2Id] = createNode(m, cockpitPartLeft2, cockpitPartRight2Id, null);
        break;
    case cockpitPartRight2Id:
        vaisseau[cockpitPartRight2Id] = createNode(m, cockpitPartRight2, null, null);
        break;
    case cockpitToNoseTriangle1Id:
        vaisseau[cockpitToNoseTriangle1Id] = createNode(m, cockpitToNoseTriangle1, cockpitToNoseTriangle2Id, null);
        break;
    case cockpitToNoseTriangle2Id:
        m = scale4(1, -1, 1)
        vaisseau[cockpitToNoseTriangle2Id] = createNode(m, cockpitToNoseTriangle2, cockpitToNoseFillId, null);
        break;
    case cockpitToNoseFillId:
        vaisseau[cockpitToNoseFillId] = createNode(m, cockpitToNoseFill, cockpitTriangleLeft1Id, null);
        break;
    case cockpitTriangleLeft1Id:
        vaisseau[cockpitTriangleLeft1Id] = createNode(m, cockpitTriangleLeft1, cockpitTriangleRight1Id, null);
        break;
    case cockpitTriangleRight1Id:
        m = scale4(-1, 1, 1)
        vaisseau[cockpitTriangleRight1Id] = createNode(m, cockpitTriangleRight1, cockpitTriangleLeft2Id, null);
        break;
    case cockpitTriangleLeft2Id:
        m = scale4(-1, 1, 1);
        vaisseau[cockpitTriangleLeft2Id] = createNode(m, cockpitTriangleLeft2, cockpitTriangleRight2Id, null);
        break;
    case cockpitTriangleRight2Id:
        vaisseau[cockpitTriangleRight2Id] = createNode(m, cockpitTriangleRight2, noseBottomExtensionId, null);
        break;
    /**
     * 
     * NOSE CASE
     * 
     */
    case nosePart1Id:
        vaisseau[nosePart1Id] = createNode(m, nosePart1, nosePart2Id, null);
        break;
    case nosePart2Id:
        vaisseau[nosePart2Id] = createNode(m, nosePart2, nosePart3Id, null);
        break;
    case nosePart3Id:
        vaisseau[nosePart3Id] = createNode(m, nosePart3, nosePartTriangle1Id, null);
        break;
    case nosePartTriangle1Id:
        m = scale4(1,-1,1)
        vaisseau[nosePartTriangle1Id] = createNode(m, nosePartTriangle1, nosePartTriangle3Id, null);
        break;
    case nosePartTriangle3Id:
        m = scale4(1,-1,1)
        vaisseau[nosePartTriangle3Id] = createNode(m, nosePartTriangle3, nosePartTriangleEndId, null);
        break;
    case nosePartTriangleEndId:
        m = scale4(1,-1,1)
        vaisseau[nosePartTriangleEndId] = createNode(m, nosePartTriangleEnd, backSideSideId, null);
        break;
    case noseBottomExtensionId:
        m = translate(0, -12, 0);
        vaisseau[noseBottomExtensionId] = createNode(m, noseBottomExtension, noseBottomId, tipBottomId);
        break;
    case noseBottomId:
        m = translate(0, -12, 0);
        vaisseau[noseBottomId] = createNode(m, noseBottom, null, noseBottomTriangleLeftId);
        break;
    case noseBottomTriangleLeftId:
        vaisseau[noseBottomTriangleLeftId] = createNode(m, noseBottomTriangleLeft, noseBottomTriangleRightId, null);
        break;
    case noseBottomTriangleRightId:
        vaisseau[noseBottomTriangleRightId] = createNode(m, noseBottomTriangleRight, noseBottomTriangleRight1Id, null);
        break;
    case noseBottomTriangleRight1Id:
        vaisseau[noseBottomTriangleRight1Id] = createNode(m, noseBottomTriangleRight1, noseBottomTriangleLeft1Id, null);
        break;
    case noseBottomTriangleLeft1Id:
        m = scale4(-1, 1, 1);
        vaisseau[noseBottomTriangleLeft1Id] = createNode(m, noseBottomTriangleLeft1, null, null);
        break;
        // case 11:
//     vaisseau[11] = createNode( m, baseToWingTriangle, null, null );
//     break;
    /**
     * 
     * TIP CASE
     * 
     */
    case tipBottomId:
        m = translate(0, 0.85, 12.5);
        vaisseau[tipBottomId] = createNode(m, tipBottom, tipBottomMiddleId, null);
        break;
    case tipBottomMiddleId:
        m = translate(0, 1.05, 17.5);
        vaisseau[tipBottomMiddleId] = createNode(m, tipBottomMiddle, tipTopId, null);
        break;
    case tipTopId:
        m = translate(0, 0.4, 12.5);
        vaisseau[tipTopId] = createNode(m, tipTop, tipTopMiddleId, null);
        break;
    case tipTopMiddleId:
        m = translate(0, -1.3, 17);
        vaisseau[tipTopMiddleId] = createNode(m, tipTopMiddle, tipTopEndId, null);
        break;
    case tipTopEndId:
        m = translate(0, -2.85, 19);
        vaisseau[tipTopEndId] = createNode(m, tipTopEnd, tipSideLeftId, null);
        break;
    case tipSideLeftId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSideLeftId] = createNode(m, tipSideLeft, tipSideRightId, null);
        break;
    case tipSideRightId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSideRightId] = createNode(m, tipSideRight, tipTriangleLeftId, null);
        break;
    case tipTriangleLeftId:
        m = translate(0, -2.85, 19);
        vaisseau[tipTriangleLeftId] = createNode(m, tipTriangleLeft, tipTriangleRightId, null);
        break;
    case tipTriangleRightId:
        m = translate(0, -2.85, 19);
        vaisseau[tipTriangleRightId] = createNode(m, tipTriangleRight, tipSquareLeftId, null);
        break;
    case tipSquareLeftId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSquareLeftId] = createNode(m, tipSquareLeft, tipSquareLeftBottomTriangleId, null);
        break;
    case tipSquareLeftBottomTriangleId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSquareLeftBottomTriangleId] = createNode(m, tipSquareLeftBottomTriangle, tipSquareLeftTopTriangleId, null);
        break;
    case tipSquareLeftTopTriangleId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSquareLeftTopTriangleId] = createNode(m, tipSquareLeftTopTriangle, tipSquareRightId, null);
        break;
    case tipSquareRightId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSquareRightId] = createNode(m, tipSquareRight, tipSquareRightBottomTriangleId, null);
        break;
    case tipSquareRightBottomTriangleId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSquareRightBottomTriangleId] = createNode(m, tipSquareRightBottomTriangle, tipSquareRightTopTriangleId, null);
        break;
    case tipSquareRightTopTriangleId:
        m = translate(0, -2.85, 19);
        vaisseau[tipSquareRightTopTriangleId] = createNode(m, tipSquareRightTopTriangle, null, null);
        break;
    }
    
}

// function initWingNodes(Id)
// {
//     var m = mat4();
    
//     switch(Id) {
    
//         case 0:
//             wing[0] = createNode( m, wingAttachment, 1, null );
//             break;
//         case 1:
//             m = translate(4, 0, 0);
//             wing[1] = createNode( m, reactorBase, 2, null );
//             break;
//         case 2:
//             wing[2] = createNode(m, reactorBigPart, 3, null)
//             break;
//         case 3:
//             m = rotate(20, 0, 0, 1);
//             wing[3] = createNode(m, baseToWing, 4, null);
//             break;
//         case 4:
//             m = scale(1.05, 1.05, 0.6);
//             m = mult(m, translate(-0.22, 0, 1))
//             wing[4] = createNode(m, reactorBigPart, 5, null)
//             break;
//     }
// }

function traverseVaisseau(Id) {
    if(Id == null) return; 
    stack.push(modelview);
    modelview = mult(modelview, vaisseau[Id].transform);
    vaisseau[Id].render();
    if(vaisseau[Id].child != null) traverseVaisseau(vaisseau[Id].child); 
    modelview = stack.pop();
    if(vaisseau[Id].sibling != null) traverseVaisseau(vaisseau[Id].sibling); 
}

//===================================================================================//

function trianglePrism() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 1, 1, centerLenght));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrism.render();
}

/*
 *
 * CENTER OF THE SHIP
 *
 */

function topBottomOfCenter() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( centerWidth, centerThinkness, centerLenght + 1));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.0, 0.4, 0.9, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();
    
    setDefaultMaterial();
}

function sideOfCenter() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 2/3, centerThinkness, centerLenght + 1));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.5, 0.5, 0.5, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();

    setDefaultMaterial();
}

function droide(){

    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, texID1);
    gl.uniform1i(u_textureLoc, 1);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 0, 10));
    instanceMatrix = mult(instanceMatrix, rotate(90, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.3, 0.3, 0.3));
    
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
}

/*
 * 
 * BACK PARTS
 * 
 */

function backSideTop(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, -0.45, -15.7))
    instanceMatrix = mult(instanceMatrix, rotate(-30, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/8, centerThinkness, 0.2));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.0, 0.2, 0.9, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();

}

function backSideBottom(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 0.45, -15.7))
    instanceMatrix = mult(instanceMatrix, rotate(30, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/8, centerThinkness, 0.2));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    box.render();

    setDefaultMaterial();
}

function backSideSide(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(-30,1,0,0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/12, centerThinkness, 0.2));
    instanceMatrix = mult(instanceMatrix, translate(0, 49, -25.8))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.0, 0.5, 1.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();

    setDefaultMaterial();
}

function backSideLittleTriangle(){
    // normalMatrix = extractNormalMatrix(modelview);
    // gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    // //instanceMatrix = mult(modelview, rotate(0,0,1,0))
    // instanceMatrix = mult(modelview, rotate(-30,1,0,0))
    // instanceMatrix = mult(instanceMatrix, rotate(180,0,0,1))
    // //instanceMatrix = mult(instanceMatrix, rotate(90,0,1,0))
    // instanceMatrix = mult(instanceMatrix, scale4( 7/12, centerThinkness, centerThinkness));
    // instanceMatrix = mult(instanceMatrix, translate(2, 49, -28.8))
	
    // gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    // triangleBasePrismRectangle.render();
}

function backSideBigTriangle(){
    
}

function backTopLeftTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(-30,1,0,0))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,0,1))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,1,0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/12, 0.2, centerThinkness));
    instanceMatrix = mult(instanceMatrix, translate(0, 49, 0))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function backTopRightTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(-30,1,0,0))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,0,1))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,1,0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/12, 0.2, centerThinkness));
    instanceMatrix = mult(instanceMatrix, translate(0, 49, -25.8))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function backBottomLeftTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(-30,1,0,0))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,0,1))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,1,0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/12, 0.2, centerThinkness));
    instanceMatrix = mult(instanceMatrix, translate(0, 49, -25.8))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function backBottomRightTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(-30,1,0,0))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,0,1))
    instanceMatrix = mult(instanceMatrix, rotate(90,0,1,0))
    instanceMatrix = mult(instanceMatrix, scale4( 7/12, 0.2, centerThinkness));
    instanceMatrix = mult(instanceMatrix, translate(0, 49, -25.8))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function backTriangleLeft(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(90, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, translate(-6, 5, -5.5))
    instanceMatrix = mult(instanceMatrix, scale4( 1.1, 0.2, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrism.render();
}

function backTriangleRight(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(-90, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, translate(6, 5, -5.5))
    instanceMatrix = mult(instanceMatrix, scale4( 1.1, 0.2, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrism.render();
}

function backSquare(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    //instanceMatrix = mult(modelview, rotate(-90, 1, 0, 0))
    instanceMatrix = mult(modelview, translate(0, -6, -5.5))
    instanceMatrix = mult(instanceMatrix, scale4( 1, 1, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

/*
 *
 * COCKPIT PARTS
 *
 */

function cockpitPart1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 1.2, 16))
    instanceMatrix = mult(instanceMatrix, rotate(320, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.5, centerThinkness, 0.4));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();

    setDefaultMaterial();
}

function cockpitPart2(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 0.35, 24.8))
    instanceMatrix = mult(instanceMatrix, rotate(18, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.5, centerThinkness, 1.55));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();

    setDefaultMaterial();
}

function cockpitPartLeft2(){
    instanceMatrix = mult(modelview, translate(-3.2, 0.10, 22))
    instanceMatrix = mult(instanceMatrix, rotate(102, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(-4.7, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, rotate(235, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4(0.38, 1.6, centerThinkness))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    triangleBasePrism.render();

    setDefaultMaterial();
}

function cockpitPartRight2(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(3.2, 0.10, 22))
    instanceMatrix = mult(instanceMatrix, rotate(102, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(4.7, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, rotate(-235, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4(0.38, 1.6, centerThinkness))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    triangleBasePrism.render();

    setDefaultMaterial();
}

function cockpitToNoseTriangle1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-1.2, -1.9, 29.9))
    instanceMatrix = mult(instanceMatrix, rotate(275, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(-10, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, rotate(180, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, scale4( 0.18, 1.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function cockpitToNoseTriangle2(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.2, 1.9, 29.9))
    instanceMatrix = mult(instanceMatrix, rotate(84, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(30, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.18, 1.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function cockpitToNoseFill(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, -2.3, 37))
    instanceMatrix = mult(instanceMatrix, rotate(5, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, centerThinkness, 2));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function cockpitTriangleLeft1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-2.5, 0, 14.6))
    instanceMatrix = mult(instanceMatrix, rotate(50, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(180, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, 0.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    triangleBasePrismRectangle.render();

    setDefaultMaterial();
}

function cockpitTriangleRight1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-2.5, 0, 14.6))
    instanceMatrix = mult(instanceMatrix, rotate(50, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(180, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, 0.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    triangleBasePrismRectangle.render();

    setDefaultMaterial();
}

function cockpitTriangleLeft2(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(4.5, -0.3, 17.6))
    instanceMatrix = mult(instanceMatrix, rotate(80, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, rotate(-35, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(10, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, scale4( 0.3, 0.37, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    triangleBasePrismRectangle.render();

    setDefaultMaterial();
}

function cockpitTriangleRight2(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(4.5, -0.3, 17.6))
    instanceMatrix = mult(instanceMatrix, rotate(80, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, rotate(-35, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(10, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, scale4( 0.3, 0.37, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    materialAmbient = vec4( 0.7, 0.7, 0.7, 1.0 );
    materialDiffuse = vec4( 0, 0, 0, 1.0 );
    materialSpecular = vec4( 0.0, 0.0, 0.0, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    triangleBasePrismRectangle.render();

    setDefaultMaterial();
}

/*
 *
 * NOSE PARTS
 *
 */

function nosePart1(){

    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, texID2);
    gl.uniform1i(u_textureLoc, 2);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, -0.97, 20))
    instanceMatrix = mult(instanceMatrix, rotate(11, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.45, centerThinkness, 1.1));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
    gl.disableVertexAttribArray(TexCoordLoc);
}

function nosePartTriangle1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-3.2, 0.3, 15))
    instanceMatrix = mult(instanceMatrix,rotate(80, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(-3.5, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, rotate(-10, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.15, 1.7, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function nosePartTriangleEnd(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(2.2, 0, 15))
    instanceMatrix = mult(instanceMatrix,rotate(80, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.12, 1.7, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function nosePart2(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, -2.5, 28.5))
    instanceMatrix = mult(instanceMatrix, rotate(9, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.45, centerThinkness, 0.7));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function nosePart3(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, -3.6, 37))
    instanceMatrix = mult(instanceMatrix, rotate(7, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.3, centerThinkness, 2));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function nosePartTriangle3(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-2.4, 3.2, 32))
    instanceMatrix = mult(instanceMatrix,rotate(83, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(-3.5, 0, 0, 1))
    instanceMatrix = mult(instanceMatrix, rotate(-10, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.08, 1.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function noseBottomExtension(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 2.5, 37))
    instanceMatrix = mult(instanceMatrix, rotate(-5.3, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.23, centerThinkness, 2));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function noseBottom(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 0.95, 23))
    instanceMatrix = mult(instanceMatrix, rotate(-7, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.45, centerThinkness, 1.7));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function noseBottomTriangleLeft(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-2, 0, 14))
    instanceMatrix = mult(instanceMatrix, rotate(82, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( -0.30, 1.8, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function noseBottomTriangleRight(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(2, 0, 14))
    instanceMatrix = mult(instanceMatrix, rotate(82, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4(0.30, 1.8, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}


function noseBottomTriangleLeft1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.2, 1.9, 29.9))
    instanceMatrix = mult(instanceMatrix, rotate(83, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(25, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.18, 1.3, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function noseBottomTriangleRight1(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.2, 1.9, 29.9))
    instanceMatrix = mult(instanceMatrix, rotate(84, 1, 0, 0))
    instanceMatrix = mult(instanceMatrix, rotate(25, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.18, 1.3, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}


/*
 *
 * REACTOR PARTS
 *
 */


function reactorBase(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.3, 0.7, centerLenght-0.01));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function reactorBigPart(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.3, 0.3, 0.8));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinderOpen.render();
}

function reactorBigPartSleeve(){

    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE3);
    gl.bindTexture(gl.TEXTURE_2D, texID3);
    gl.uniform1i(u_textureLoc, 3);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.3, 0.3, 0.8));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    //COLOR QUESTION
    materialAmbient = vec4( 1, 1, 1, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    cylinder.render();

    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
}

function reactorHalfCircleCap(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.3, 0.3, 0.1));
    
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

function reactorInsidePart(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.1, 0.1, 0.1));
    
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cone.render();
}

function reactorMiddlePart(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.15, 0.15, 0.4));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

function reactorMiddlePartExtended(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.15, 0.15, 0.4));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

/*
 *
 * WING PARTS
 *
 */

function wingAttachment(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4( 0.15, 0.1, centerLenght));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    box.render();
}

function baseToWing(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0.2, 5.5, 0));
    instanceMatrix = mult(instanceMatrix, rotate(295, 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4( 0.5, centerThinkness, centerLenght + 0.2));
	

    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function fillBaseToWing(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = modelview
    instanceMatrix = mult(instanceMatrix, scale4(0.3, 0.5, 2))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    
    triangleBasePrismRectangle.render();
}

function wingAngledSide() {

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, rotate(90, 0, 1, 0))
    instanceMatrix = mult(instanceMatrix, scale4( 0.4, 3.2, centerThinkness));
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function wingMainPart() {
    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, texID2);
    gl.uniform1i(u_textureLoc, 2);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(centerThinkness, 3.2, 1.6))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.0, 0.1, 0.9, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);
    
    box.render();
    
    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
}

function wingBigDetail() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(centerThinkness, 0.8, 1))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 0.3, 0.3, 0.3, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    box.render();
}

function wingDetailBase() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(centerThinkness, 0.2, 1))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function wingDetailBase2() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(centerThinkness, 0.6, 0.7))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function wingDetailMiddle() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(centerThinkness, 0.3, 0.5))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function wingDetailTop() {
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(centerThinkness, 0.1, 0.3))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();

    setDefaultMaterial();
}
/*
 *
 * WEAPON PARTS
 *
 */

function weaponBase(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.3, 0.3, 0.9))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}
function weaponBigPart(){
    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE4);
    gl.bindTexture(gl.TEXTURE_2D, texID4);
    gl.uniform1i(u_textureLoc, 4);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.15, 0.15, 1))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    
    //COLOR QUESTION
    materialAmbient = vec4( 1, 1, 1, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    cylinder.render();

    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
}

function weaponBigPartSleeve(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.16, 0.16, 0.6))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

function weaponSquareDetail(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.1, 0.1, 0.3))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function weaponMiddlePart(){
    gl.enableVertexAttribArray(TexCoordLoc);
    gl.activeTexture(gl.TEXTURE5);
    gl.bindTexture(gl.TEXTURE_2D, texID5);
    gl.uniform1i(u_textureLoc, 5);

    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.1, 0.1, 1.5))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));

    materialAmbient = vec4( 1, 1, 1, 1.0 );
    ambientProduct = mult(lightAmbient, materialAmbient);
    diffuseProduct = mult(lightDiffuse, materialDiffuse);
    specularProduct = mult(lightSpecular, materialSpecular);
    
    gl.uniform4fv(gl.getUniformLocation(prog, "ambientProduct"), flatten(ambientProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "diffuseProduct"), flatten(diffuseProduct));
    gl.uniform4fv(gl.getUniformLocation(prog, "specularProduct"), flatten(specularProduct));
    gl.uniform1f(gl.getUniformLocation(prog, "shininess"), materialShininess);

    cylinder.render();

    setDefaultMaterial();
    gl.disableVertexAttribArray(TexCoordLoc);
}

function weaponFarPart(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.08, 0.08, 1.5))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

function weaponRoundTip(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.12, 0.12, 0.05))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

function weaponClamp(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.08, 0.08, 1.5))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}
function weapongEnd(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, scale4(0.04, 0.04, 0.3))
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    cylinder.render();
}

/**
 * 
 * TIP PARTS 
 *
 */
function tipBottom(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 2.5, 37))
    instanceMatrix = mult(instanceMatrix, rotate(-5.3, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, centerThinkness, 0.6));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}
function tipBottomMiddle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 3, 37))
    instanceMatrix = mult(instanceMatrix, rotate(-12, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, centerThinkness, 0.42));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipBottomEnd(){
    // normalMatrix = extractNormalMatrix(modelview);
    // gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    // instanceMatrix = mult(modelview, translate(0, 3, 37))
    // instanceMatrix = mult(instanceMatrix, rotate(-12, 1, 0, 0));
    // instanceMatrix = mult(instanceMatrix, scale4( 0.15, centerThinkness, 0.1));
	
    // gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    // box.render();
}

function tipTop(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 8, 37))
    instanceMatrix = mult(instanceMatrix, rotate(15, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, centerThinkness, 0.6));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipTopMiddle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 8, 37))
    instanceMatrix = mult(instanceMatrix, rotate(30, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, centerThinkness, 0.4));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipTopEnd(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0, 8, 37))
    instanceMatrix = mult(instanceMatrix, rotate(60, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, centerThinkness, 0.15));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}
function tipSideLeft(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-1.3, 8.4, 31))
    instanceMatrix = mult(instanceMatrix, rotate(96, 0, 1, 0));
    //instanceMatrix = mult(instanceMatrix, rotate(-6, 0, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.6, 0.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipSideRight(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.3, 8.4, 31))
    instanceMatrix = mult(instanceMatrix, rotate(84, 0, 1, 0));
    //instanceMatrix = mult(instanceMatrix, rotate(-6, 0, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.6, 0.4, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipTriangleLeft(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-1.4, 10.3, 28))
    instanceMatrix = mult(instanceMatrix, rotate(-86, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, rotate(-6, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.5, 0.15, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function tipTriangleRight(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.4, 10.3, 28))
    instanceMatrix = mult(instanceMatrix, rotate(-94, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, rotate(6, 1, 0, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.5, 0.15, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function tipSquareLeft(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-0.9, 8, 35))
    instanceMatrix = mult(instanceMatrix, rotate(85, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.37, 0.15, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipSquareLeftTopTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-1.025, 8.7, 33.5))
    instanceMatrix = mult(instanceMatrix, rotate(95, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, 0.15, centerThinkness));
    instanceMatrix = mult(instanceMatrix, scale4(-1,1,1))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function tipSquareLeftBottomTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(-1.025, 6.7, 33.5))
    instanceMatrix = mult(instanceMatrix, rotate(95, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, rotate(-10, 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, 0.15, centerThinkness));
    instanceMatrix = mult(instanceMatrix, scale4(-1,1,1))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function tipSquareRight(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(0.9, 8, 35))
    instanceMatrix = mult(instanceMatrix, rotate(85, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.37, 0.15, centerThinkness));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    box.render();
}

function tipSquareRightTopTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.025, 8.7, 33.5))
    instanceMatrix = mult(instanceMatrix, rotate(85, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, 0.15, centerThinkness));
    instanceMatrix = mult(instanceMatrix, scale4(-1,1,1))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

function tipSquareRightBottomTriangle(){
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));

    instanceMatrix = mult(modelview, translate(1.025, 6.7, 33.5))
    instanceMatrix = mult(instanceMatrix, rotate(85, 0, 1, 0));
    instanceMatrix = mult(instanceMatrix, rotate(-10, 0, 0, 1));
    instanceMatrix = mult(instanceMatrix, scale4( 0.25, 0.15, centerThinkness));
    instanceMatrix = mult(instanceMatrix, scale4(-1,1,1))
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    triangleBasePrismRectangle.render();
}

// function baseToWingTriangle(){
//     var vertices = [

//         vec4( -1, -1,  0, 1.),
//         vec4( -1,  1,  0, 1 ),
//         vec4(  1,  2,  0, 1 )
//     ];
//     normalMatrix = extractNormalMatrix(modelview);
//     gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));
 
//     instanceMatrix = modelview;

//     gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
//     gl.drawArrays( gl.TRIANGLES, 0, 3 );
// }



function quad(a, b, c, d) {

    var t1 = subtract(vertices[b], vertices[a]);
    var t2 = subtract(vertices[c], vertices[b]);
    var normal = cross(t1, t2);
    var normal = vec3(normal);
    normal = normalize(normal);

    pointsArray.push(vertices[a]); 
    normalsArray.push(normal); 
    pointsArray.push(vertices[b]); 
    normalsArray.push(normal); 
    pointsArray.push(vertices[c]); 
    normalsArray.push(normal);   
    pointsArray.push(vertices[a]);  
    normalsArray.push(normal); 
    pointsArray.push(vertices[c]); 
    normalsArray.push(normal); 
    pointsArray.push(vertices[d]); 
    normalsArray.push(normal);    
}

function testHexagon(){
    shapeHexagon();
    normalMatrix = extractNormalMatrix(modelview);
    gl.uniformMatrix3fv(NormalMatrixLoc, false, flatten(normalMatrix));
    instanceMatrix = modelview;
    //instanceMatrix = mult(instanceMatrix, scale4( 0.4, centerThinkness, centerLenght));
	
    gl.uniformMatrix4fv(ModelviewLoc, false, flatten(instanceMatrix));
    gl.drawArrays( gl.TRIANGLES, 0, 54 );
}

function hexagon(a, b, c, d, e, f, center) {
    var center = vec3(0.0, 0.25, 0.5);  // Center of the hexagon

    var t1 = subtract(vertices[b], vertices[a]);
    var t2 = subtract(vertices[c], vertices[b]);
    var normal = cross(t1, t2);
    normal = normalize(vec3(normal));

    // Triangle 1
    pointsArray.push(center);
    normalsArray.push(normal);
    pointsArray.push(vertices[a]);
    normalsArray.push(normal);
    pointsArray.push(vertices[b]);
    normalsArray.push(normal);

    // Triangle 2
    pointsArray.push(center);
    normalsArray.push(normal);
    pointsArray.push(vertices[b]);
    normalsArray.push(normal);
    pointsArray.push(vertices[c]);
    normalsArray.push(normal);

    // Triangle 3
    pointsArray.push(center);
    normalsArray.push(normal);
    pointsArray.push(vertices[c]);
    normalsArray.push(normal);
    pointsArray.push(vertices[d]);
    normalsArray.push(normal);

    // Triangle 4
    pointsArray.push(center);
    normalsArray.push(normal);
    pointsArray.push(vertices[d]);
    normalsArray.push(normal);
    pointsArray.push(vertices[e]);
    normalsArray.push(normal);

    // Triangle 5
    pointsArray.push(center);
    normalsArray.push(normal);
    pointsArray.push(vertices[e]);
    normalsArray.push(normal);
    pointsArray.push(vertices[f]);
    normalsArray.push(normal);

    // Triangle 6
    pointsArray.push(center);
    normalsArray.push(normal);
    pointsArray.push(vertices[f]);
    normalsArray.push(normal);
    pointsArray.push(vertices[a]);
    normalsArray.push(normal);
}

function shapeHexagon(){
    vertices = [
        vec3( -0.5, -0.5,  0.5 ),
        vec3( -0.5,  -0.5,  -0.5 ),
        vec3( 0.5,  -0.5,  -0.5 ),
        vec3( 0.5, -0.5,  0.5 ),
        vec3( -0.75, 0.25, 0.5 ),
        vec3( -0.75,  0.25, -0.5 ),
        vec3( 0.75,  0.25, 0.5 ),
        vec3( 0.75, 0.25, -0.5 ),
        vec3( 0.5,  1, -0.5 ),
        vec3( 0.5, 1, 0.5 ),
        vec3( -0.5,  1, -0.5 ),
        vec3( -0.5, 1, 0.5 ),
    ];

    quad( 1, 0, 3, 2 );
    quad( 2, 3, 6, 7 );
    quad( 6, 7, 8, 9 );
    quad( 8, 9, 11, 10 );
    quad( 11, 10, 5, 4 );
    quad( 5, 4, 0, 1 );
    hexagon(0, 3, 6, 9, 11, 4);
    hexagon(5, 10, 8, 7, 2, 1);
}