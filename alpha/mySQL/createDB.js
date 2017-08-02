var mysql = require('mysql');

var con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'ahmadbasir'
});

function getDB(name) {
  return name;
}

var nameDatabase = getDB('nodejs');

exports.getNameDatabase = function() {
  return nameDatabase;
};

con.connect(function(err) {
  if (err) {
    throw err;
  }console.log('connected!');
  con.query("CREATE DATABASE "+nameDatabase,function(err,result) {
    if (err) {
      throw err;
    }console.log('Database Created!');
    con.end();
  })
})
