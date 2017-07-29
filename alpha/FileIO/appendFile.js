var fs = require('fs');
fs.appendFile(
  'newFile.js',
  'console.log("new line of hello");',
  function(err) {
    if(err) throw err;
    console.log('Updated!');
  }
);
