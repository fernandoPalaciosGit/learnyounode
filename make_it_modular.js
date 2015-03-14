///////////////////////////////////////////////////////////////////
// print list of files like above execise, implemented by module //
///////////////////////////////////////////////////////////////////
var listFiles = require("./modules/module.filterFiles"),
    dir = process.argv[2],
    fileType = process.argv[3],
    callBackListFiles = function( err, arrFiles ){
        if ( !!err ) {
            console.dir(err);
            return false;
        }

        // our module return the arrFile filtered
        arrFiles.forEach(function(file){
            console.log(file);
        });
    };

listFiles( dir, fileType, callBackListFiles );