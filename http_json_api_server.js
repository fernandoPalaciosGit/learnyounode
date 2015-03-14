/////////////////////////////////
// HTTP JSON API SERVER : REST //
/////////////////////////////////
/*/api/parsetime?iso=2013-08-10T12:10:15.474Z
'/api/unixtime'*/
var http = require("http"),
    url = require("url"),
    portServer = Number(process.argv[2]) || 8090;

http.createServer(function(request, response){
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var urlJson = url.parse(request.url, true), // parse into object
        date, jsonResponse = {};

    if( /parsetime/.test( urlJson.pathname ) ){
        date = new Date( urlJson.query.iso );
        jsonResponse = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
    
    } else if ( /unixtime/.test( urlJson.pathname ) ){
        date = new Date( urlJson.query.iso );
        jsonResponse = {
            "unixtime": date.getTime()
        };
    }

    response.end( JSON.stringify(jsonResponse) );
})
.listen(portServer);