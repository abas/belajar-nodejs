var fs = require('fs');

fs.writeFile(
  'newFile.js',
  'console.log("Replaced by writeFile.js");',
  function(err) {
    if(err) throw err;
    console.log('Replaced!');
    // console.log('saved!');
  }
);
