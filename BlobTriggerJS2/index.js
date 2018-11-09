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
        uri: 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect',
        body: '{"url": ' + '"' + imageUrl + '"}',
        headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey    
        },
        qs: params
     };
     context.log("Ready to issue request") ;
     //
     //  issue the request
     //  
    request(options, function(err, res, body) {
        let json = JSON.parse(body);
        context.log("Face Detect: ",body) ;
    )};
    context.log("js2 done");
    context.done();
};