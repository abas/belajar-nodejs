var http = require('http');
var url = require('url');

var port = 8000;
var msg = "connected to server\n https://localhost:"+port;


// CREATE SERVER OBJECT
http.createServer(function(request,resource) {
  resource.writeHead(200,{'Content-Type':'text/html'});
  var q = url.parse(request.url,true).query;
  var txt = q.year+" "+q.month;
  // resource.write(request.url); //write response request
  resource.end(txt); //end of response
}).listen(port);

console.log(msg);
