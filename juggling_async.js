////////////////
// HTTP ASYNC //
////////////////
/*queue the http get results, and keep track of how many of the URLs have returned their entire contents.
Counting callbacks is one of the fundamental ways of managing async in Node.*/
var http  = require("http"),
    BufferList = require("bl"),
    patternHttp = /^((http):\/\/)/,
    urlRequest = [].slice.call(process.argv, 2), // a partir del tercer argumento del command-line
    async = require("async");   // work with multiple async loaded data
                                // callback flow (parallel, series, waterfall…)

var pipeResponse = function(url){
    
    if( !url || !patternHttp.test( url ) ) return false;

    http.get(url, function( response ){
        response
        .pipe( BufferList(function ( err, data ) {
            if( !!err ) return console.error(err);

            console.log(data.length);
            console.log(data.toString());
        }) );
    } );
};

async.series( urlRequest.map( pipeResponse ) );