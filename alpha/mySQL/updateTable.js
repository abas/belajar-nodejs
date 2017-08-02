var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ahmadbasir',
  database:'nodejs'
});

con.connect(function(err) {
  if (err) {
    throw err;
  }console.log('connected!');


  var UPDATEstate = "UPDATE mhs SET id='2' WHERE nama='Antonius Billy'";
  con.query(UPDATEstate,function(err) {
    if(err) console.log('id [2] notFound!');
    else console.log('id updated!');
  })

  con.end();
});
