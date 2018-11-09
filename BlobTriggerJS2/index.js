module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name );
    context.log("Found ",myBlob.faces.length, "Faces in ",myBlob.bloburl);
    //
    // Set up face call
    // 
    const imageUrl = myBlob.bloburl;
    const subscriptionKey = process.env.CogServiceKey ;
    const params = {
    'returnFaceId' : 'true',
    'returnFaceLandmarks': 'true',
    'returnFaceAttributes': 'age,gender,facialHair,emotion'
     };
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
     context.log("Ready to issue request");
     //
     //  issue the request
     //  
    //request(options, function(err, res, body) {
    //    let json = JSON.parse(body);
    //    context.log("Face Detect: ",body) ;
    //};

    context.done();
};