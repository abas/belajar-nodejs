var fs = require('fs');
fs.open('newFile.js','r',function(err) {
  if(err) throw err;
  console.log('saved!');
});
