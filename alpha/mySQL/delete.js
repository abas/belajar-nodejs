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
  if (err) throw err;
  console.log('connected!');

  var DELETEstate = "DELETE FROM mhs WHERE id='3'"
  con.query(DELETEstate,function(err,result) {
    if (err) throw err;
    console.log('delete affectedRows : ',result.affectedRows);
  })

  var SHOWstate = "SELECT * FROM mhs"
  con.query(SHOWstate,function(err,result) {
    if (err) throw err;
    breakLIne();
    for(index in result){
      console.log('id   : ',result[index].id);
      console.log('Nama : ',result[index].nama);
      console.log('Nim  : ',result[index].nim);
      breakLIne();
    }
  })
  con.end();
});
