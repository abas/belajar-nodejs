var mysql = require('mysql');

var con = mysql.createConnection({
  host : 'localhost', // local address
  user : 'root', // user root
  password : 'ahmadbasir', // pass root
  database : 'nodejs' // database root
});

con.connect(function(err) {
  if (err) {
    throw err;
  }else{
    console.log('connected!');
  }
})
con.end();
