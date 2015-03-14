var fs = require('fs'),
    path = require('path');

module.exports = function ( dir, fileExt, listFilesFromDir ){

    fs.readdir( dir, function ( err, arrFiles ) {

        return ( !!err ) ?  listFilesFromDir( err ) :
                            listFilesFromDir(null , arrFiles.filter( function (file) { 
                                    return path.extname(file) === '.' + fileExt;
                                })
                            );
    });
};