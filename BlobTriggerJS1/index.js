module.exports = function (context, myBlob) {
    var request = require('request-promise');
    //
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    context.log("Full blob path:", context.bindingData.blobTrigger);
    context.log(" Url", context.bindingData.name);
    //
    //  Added a not to see if git works
    //  
    //const subscriptionKey = '4287cca65e4446d0a360841265095710';
    const subscriptionKey = process.env.CogServiceKey ;
    const uriBase =
    'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze';
     const imageUrl = context.bindingData.uri;
    //
     const params = {
    'visualFeatures' : 'categories,tags,description,faces',
     'details': '',
    'language': 'en'
     };
    //    
    var options = {
        method: 'POST',
        uri: 'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/analyze',
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey    
        },
        qs: params
     };
    //
    const storage = require('azure-storage');
    const path = require('path');
    const args = require('yargs').argv;
    var containerName = "analysis";
    //
    const blobService = storage.createBlobService(process.env.AzureWebJobsStorage);
    context.log("Created blobService");
    //
    request(options, function(err, res, body) {
        let json = JSON.parse(body);
        context.log("Container:", containerName);
        context.log("output: ", context.bindingData.name +".json");
        context.log("json: ", json);
            blobService.createBlockBlobFromText(containerName,context.bindingData.name +".json", body, function(error, result, response) {
                if (!error) {
                // file uploaded
                context.log("Blob Created");
                }
            });
    });

    context.done();
};