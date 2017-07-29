var http = require('http');
var fs = require('fs');

var port = 8000;
var msg = "connected to server...\nhttps://localhost:"+port;

http.createServer(function(req,res) {
  fs.readFile('html/demo1.html',function(err,data) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    res.end();
  });
}).listen(port);

console.log(msg);
