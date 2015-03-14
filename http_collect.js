//////////////////
// HTTP COLLECT //
//////////////////
var http = require('http'),
    url  = process.argv[2],
    // third party modules : collect http data buffer
    BufferList = require("bl");

http.get(url, function( response ){

    // when the stream is ready and you can write the output
    response.on("data", function( chunk ){
        var bl = new BufferList();
        bl.append( new Buffer(chunk) );
        console.log(bl.length);
        console.log(bl.toString());
    }); 

}).on( "error", function(err){
    console.dir(err);
});


/*http.get(url, function( response ){
    response
    .pipe( BufferList(function ( err, data ) {
        if( !!err ) return console.error(err);

        console.log(data.length);
        console.log(data.toString());
    }) );
});*/