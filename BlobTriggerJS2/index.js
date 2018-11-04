module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name );
    context.log("Found ",myBlob.faces.length, "Faces in ",myBlob.bloburl);
    //
    // Set up face call
    // 
    const subscriptionKey = process.env.CogServiceKey ;
    const params = {
    'visualFeatures' : 'categories,tags,description,faces',
     'details': '',
    'language': 'en'
     };


    context.done();
};