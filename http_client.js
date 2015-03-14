/////////////////
// HTTP CLIENT //
/////////////////
/*points to the url GET request throught command-line argument
wite into console client the data response of http request.*/
var http = require('http'),
    optHttp = {
        hostname: 'localhost',
        port: 8090,
        path: process.argv[2],
        agent: false  // create a new agent just for this one request
    };

http.get(  optHttp, function( response ){

    // response = node stream object = objects that emit events
    
    // response events = "data", "error", "end"
    response.setEncoding('utf-8'); // emit strings rather buffer charset
    response.on("data", function( chunk ){
        console.log("BODY : " + chunk);
    });
    response.on('error', function( err ){
        console.error(err);
    });
    
}).on("error", function( err ){
    console.dir(err);
});