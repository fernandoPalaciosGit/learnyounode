/////////////////////////////////////////////////////
// Baby Steps : Sum numbers from console arguments //
/////////////////////////////////////////////////////
var sum = 0;
for (var i = 2, lenArg = process.argv.length; i < lenArg; i++) {
    var arg = +process.argv[i];
    if( !isNaN(arg) ){
        sum +=  arg;
    }
}

console.log(sum);