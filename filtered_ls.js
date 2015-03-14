//////////////////////////////////////////////////////////////////////////////////////
// print list of file types names into a directory provided by comand line argument //
//////////////////////////////////////////////////////////////////////////////////////
var dirArgv = process.argv[2],
    fileTypeArgv = process.argv[3],
    fs = require('fs'),
    path = require('path');

fs.readdir( dirArgv, function( err, arrFiles ){

    for (var i = 0, len = arrFiles.length; i < len; i++) {
        var arrFile = arrFiles[i];
        if ( path.extname( arrFile ) === "."+fileTypeArgv ) {
            console.log(arrFile);
        }
    }
});