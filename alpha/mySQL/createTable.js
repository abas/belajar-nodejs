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

  // var SQLstate = "DROP TABLE mhs"; // to drop table
  var SQLstate = "CREATE TABLE mhs (id INT NOT NULL AUTO_INCREMENT,"+
                 " nama VARCHAR(128), nim VARCHAR(15), PRIMARY KEY (id))";
  con.query(SQLstate,function(err,result) {
    if (err) {
      throw err;
    }console.log('Table Created!');
    // }console.log('Table Deleted!'); // message
  })
});
