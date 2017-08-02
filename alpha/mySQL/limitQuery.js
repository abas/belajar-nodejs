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

  var LIMITstate = "SELECT * FROM mhs LIMIT 2 OFFSET 1";
  // they'll just get 2 query on start on 1 offset from first index
  con.query(LIMITstate,function(err,result){
    if(err) throw err;
    console.log(result);
  })
  // var LIMITstate = "SELECT * FROM mhs LIMIT 2"; // they'll just get 2 query
  // con.query(LIMITstate,function(err,result){
  //   if(err) throw err;
  //   console.log(result);
  // })

  con.end();
});
