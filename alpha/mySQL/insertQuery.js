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

  var SQLstate = "INSERT INTO mhs (nama,nim)"+
                 " VALUES ('Antonius Billy','A11.2014.08170')";

  con.query(SQLstate,function(err,result) {
    if (err) {
      throw err;
    }console.log('Query Inserted!');
    // }console.log('Table Deleted!'); // message
    con.end();
  })
});
