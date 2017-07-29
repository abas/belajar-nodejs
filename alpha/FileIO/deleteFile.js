var fs = require('fs');
fs.unlink(
  'newFile.js', // file name
  function(err) {
    if (err) {
      throw err;
    }console.log('file deleted!');
  }
);
