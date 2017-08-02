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
  }console.log('Query loaded : \n');

  var SQLstate = "SELECT * FROM mhs"
  con.query(SQLstate,function(err,result,fields) {
    if (err) {
      throw err;
    }
    console.log(fields);
    // console.log("SELECT id FROM mhs   : "+result[0].id);
    // console.log("SELECT name FROM mhs : "+result[0].nama);
    // console.log("SELECT nim FROM mhs  : "+result[0].nim);

    // for(index in result){
    //   console.log('id   : '+result[index].id);
    //   console.log('nama : '+result[index].nama);
    //   console.log('nim  : '+result[index].nim);
    //   console.log('\n');
    // }
    con.end();
    console.log(getClose('disconnected!'));
  })
});
