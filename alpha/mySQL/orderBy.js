var mysql = require('mysql');

var con = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'ahmadbasir',
  database:'nodejs'
});

function breakLIne() {
  console.log('--------------------------------------------------------');
}

con.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('connected!');
  console.log('Query loaded : ');

  var SQLstate = "SELECT * FROM mhs ORDER BY nama"
  con.query(SQLstate,function(err,result) {
    if (err) throw err;
    breakLIne();
    for(index in result){
      console.log('id   : ',result[index].id);
      console.log('Nama : ',result[index].nama);
      console.log('Nim  : ',result[index].nim);
      breakLIne();
    }
  })

  // SELECT where there are have Char 'A' on the front
  // var SQLstate = "SELECT * FROM mhs WHERE nama LIKE 'A%'"

  // SELECT with different rule
  // var SQLstate = "SELECT * FROM mhs WHERE nama LIKE ?"
  // con.query(SQLstate,'A%',function(err,result,fields) {

  // SELECT with define variable
  // var id = '1';
  // var SQLstate = "SELECT * FROM mhs WHERE nama LIKE 'A%' AND nim LIKE 'A%'"
  // con.query(SQLstate,function(err,result,fields) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(result);
  //   console.log(getClose('disconnected!'));
  // })

  con.end();
});
