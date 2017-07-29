var http = require('http');
var url = require('url');
var fs = require('fs');

var port = 8000;
var msg = "connected to server..\nhttps://localhost:"+port;

http.createServer(function(req,res){
  var q = url.parse(req.url,true);
  var filename = "."+q.pathname+".html";
  fs.readFile(filename,function(err,data) {
    if (err) {
      res.writeHead(404,{'Content-Type':'text/html'});
      return res.end("404 error : Not Found");
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(port);

console.log(msg);
