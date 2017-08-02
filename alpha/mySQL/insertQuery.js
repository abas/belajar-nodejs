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

  var SQLstate = [
                ("INSERT INTO mhs (nama,nim)"+
                 " VALUES ('Nganu Iki','A11.2014.01863')"),
                ("INSERT INTO mhs (nama,nim)"+
                 " VALUES ('Sopo Kuwi','A12.2015.09128')")
               ];
  var sum = 0;
  for(index in SQLstate){
    con.query(SQLstate[index],function(err,result) {
      if (err) throw err;
    })
    sum++;
  }
  console.log(sum,' Query Inserted!');
  con.end();
});
