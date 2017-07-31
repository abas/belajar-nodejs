var fs = require('fs');
var rs = fs.createrReadStream('./demofile.txt');

rs.on('open',function() {
  console.log('file opened!');
})
