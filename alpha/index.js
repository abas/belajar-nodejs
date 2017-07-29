// IMPORT MODULE
var http = require('http');
var dt = require('./Date');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Date Now : "+dt.DateTime());
    res.end();
}).listen(3000);

console.log("connected to server : https://localhost:3000");
