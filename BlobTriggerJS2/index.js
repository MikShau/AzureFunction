module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name );
    context.log("Input: ",myBlob)
//    var jobj = JSON.parse(myBlob);
    context.log("Parsed faces: ",myBlob.faces[0].gender);
    context.done();
};