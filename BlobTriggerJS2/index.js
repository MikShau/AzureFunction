module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name );
    context.log("Input: ",myBlob)
    var jobj = JSON.parse(myblob);
    context.log("Parsed faces: ",jobj.faces[0].gender);
    context.done();
};