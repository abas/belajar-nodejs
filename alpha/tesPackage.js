var http = require('http');
var uc = require('upper-case');

var port = 8000;
var msg = "connected to server..\nhttps://localhost:"+port;


http.createServer(function(req,res) {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write("without module : Hello JS\n");
  res.write(("with module   : ")+uc("Hello JS"));
  res.end();
}).listen(port);

console.log(msg);
