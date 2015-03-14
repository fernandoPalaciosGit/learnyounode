/////////////////////////////////////////
// I/O non-blocking reading fielsystem //
/////////////////////////////////////////
var file = process.argv[2],
    fs = require("fs"),
    errRead = function( err ){
        console.log(err);
    },
    successRead = function( data ){
        console.log(data.split("\n").length - 1);
    };

fs.readFile( file, "utf-8", function(errRead, bufferRead){
    if( !!errRead ) {
        console.dir(errRead);
        return false;
    }
    var numLines = bufferRead.split("\n").length -1; 
    console.log(numLines);
} );