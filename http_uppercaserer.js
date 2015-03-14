///////////////////////////
// HTTP TRANSFORM STREAM //
///////////////////////////
// pipe stream filesystem into closure input/output stream (through2-map) to http server
var fs = require("fs"),
    http = require("http"),
    through2 = require("through2-map");

var toUpperPostRequest = through2( {wantStrings: true}, function (chunk, index) {
    return chunk.toUpperCase();
});

http.createServer(function( req, res ){

    if( req.method !== "POST"){ return res.end( "only POST data", 'utf-8' ); }
    
    var readStream = fs.createReadStream( __dirname+(process.argv[3]) );
    readStream.pipe( toUpperPostRequest )
            .pipe( res );

})
.listen( Number(process.argv[2]) );