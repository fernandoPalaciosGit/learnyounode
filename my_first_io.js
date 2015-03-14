//////////////////////////////////////////////////////////
// My First Sync IO : count number of lines in a String //
//////////////////////////////////////////////////////////
var file = process.argv[2],
    fs = require('fs'),
    bufferToString = fs.readFileSync(file, 'utf-8'),
    // bufferToString = fs.readFileSync(file).toString(),
    numLines = bufferToString.split("\n").length - 1;

console.log(numLines);