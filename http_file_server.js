///////////////////////
// HTTP FILES SERVER //
///////////////////////
var fs = require("fs"),
    http = require("http"),
    // root directori and file uri
    fileUri = __dirname+(process.argv[3] || ""),
    // http port server
    portServer = Number(process.argv[2]) || 8090;

// tambien realiza petinciones web asi que hereda la interfaz de net - http
var server = http.createServer( function( request, response ){ // both arguments are node streams
    response.writeHead(200, { 'content-type': 'text/plain' });

    var readStream = fs.createReadStream( fileUri );
    // This will wait until we know the readable stream is actually valid before piping
    readStream.on('open', function () {
        readStream.pipe(response);
        // This just pipes the read stream to the response object (which goes to the client)
    });
} );
server.listen( portServer );