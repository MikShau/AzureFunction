module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name );
    context.log("Input: ",myBlob)
    context.done();
};