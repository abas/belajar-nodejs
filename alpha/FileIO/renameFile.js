var fs = require('fs');
fs.rename(
  'newFile.js',//file target
  'newFile2.js',
  function(err) {
    if (err) {
      throw err;
    }console.log("file renamed!");
  }
);
fs.writeFile(
  'newFile2.js',
  'console.log("renamed by RenameFile.JS");',
  function(err) {
    if (err) {
      throw err;
    }
  }
);
