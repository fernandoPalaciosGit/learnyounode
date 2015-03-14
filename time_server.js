/////////////////
// TIME SERVER //
/////////////////
/*lisen TCP connections - create a web tcp server
write TCP date, format : "YYYY-MM-DD hh:mm" (zero-filled, 2 integer)*/
var net = require("net"),
    strftime = require("strftime"),
    formatDate = "%Y-%m-%d %H:%M",
    today = new Date(),
    portServer = process.argv[2] || 8090;

var socketService = function( socketWeb ){ // node duplex stream, meta-data regarding the connection,
    socketWeb.write( strftime( formatDate, today ) );
    socketWeb.end();   //Al igual que se comporta el protocolo http (no orientado a la conexion),
                    // podemos cerrar wl socket y cortar la comunicacion bidireccional conel cliente suscrito a rste socket
};

var server = net.createServer( socketService );
server.listen( portServer );