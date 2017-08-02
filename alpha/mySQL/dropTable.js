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

  // var CREATEstate = "CREATE TABLE test (id INT(10))";
  // con.query(CREATEstate,function(err) {
  //   if(err) throw err;
  //   console.log('table Created!');
  // })

  var DELETEstate = "DROP TABLE test";
  con.query(DELETEstate,function(err) {
    if(err) console.log('table gaada!');
    else console.log('table deleted!');
  })

  con.end();
});
