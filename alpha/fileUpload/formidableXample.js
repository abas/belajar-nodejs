var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var port = 3000;
var msg = "connected to server\nhttp://localhost:"+port;

http.createServer(function(req,res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err,fields,files) {
      var oldpath = files.filetoupload.path;
      var newpath = 'C:/Users/DO NOT DELETE!/belajar-nodejs/alpha/fileUpload/upload'+files.filetoupload.name;
      fs.rename(oldpath,newpath,function(err) {
        if (err) {
          throw err;
        }
        res.write('file uplaoded and moved');
        res.end();
      });
    });
  } else {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(port);
console.log(msg);
