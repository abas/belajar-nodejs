var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ahmadbasir',
  database:'nodejs'
});

var getClose = function(messages) {
  return messages;
}

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('connected!');
  console.log('Query loaded : ');

  // SELECT where there are have Char 'A' on the front
  // var SQLstate = "SELECT * FROM mhs WHERE nama LIKE 'A%'"

  // SELECT with different rule
  // var SQLstate = "SELECT * FROM mhs WHERE nama LIKE ?"
  // con.query(SQLstate,'A%',function(err,result,fields) {

  // SELECT with define variable
  var id = '1';
  var SQLstate = "SELECT * FROM mhs WHERE id = ?"
  con.query(SQLstate,[id],function(err,result,fields) {
    if (err) {
      throw err;
    }
    console.log(result);
    con.end();
    console.log(getClose('disconnected!'));
  })
});
