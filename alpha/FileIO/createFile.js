var fs = require('fs');
fs.appendFile(
  'newFile.js',
  'console.log("hello JS");',
  function(err) {
    if(err) throw err;
    console.log('saved!');
  }
);
