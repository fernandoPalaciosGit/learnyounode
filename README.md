## learning Node Js by Node_shool @ learnyounode

#### NodeJS arguments
Se utiliza *process.argv* para obtener ekl contenido completo del *command-line*
podemos pasar argumentos en el momento de ejecutar el script en el servidor.
Por defecto este objeto tiene dos valores predetermiados:
```javascript
process.argv === ['node', 'protocol:port//host.domain/path-to-script/script.js'];
```

**A partir del 2º indice se empiezan a interpretar los argumentos pasados al script por consola**
```javascript
$ node test-server.js http 88 ssl 465 wss 8090

"http" === process.argv[2];
88     === Number(process.argv[3]);
"ssl"  === process.argv[4];
465    === Number(process.argv[5]);
"wss"  === process.argv[6];
8090   === Number(process.argv[7]);
```


#### NodeJS IO - Syncronous Filesystem Read-Write
Use Global Module **fs** to read-write filesystem
Interpretation : syncronous/blocking
Interface :  fs.readFileSync() : return Buffer data



#### NodeJS IO - ASyncronous Filesystem Read-Write
Interface : fs.readFile( callback )