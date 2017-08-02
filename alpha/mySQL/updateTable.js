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


  var UPDATEstate = "UPDATE mhs SET id='4' WHERE nama='Nganu Iki'";
  con.query(UPDATEstate,function(err) {
    if(err) {
      console.log('nama [shit] notFound!');
      console.log('or [id] is being used!');
      throw err;
    }
    else {
      console.log('id updated!');
    }
  })

  con.end();
});
