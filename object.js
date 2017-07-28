function br(){
  console.log("============================");
}
var abas = {
  nama : "Abas",
  alamat : "Demak",
  umur : 19,
  info : function(){
    console.log(
      "Nama : "+abas.nama
      +"\nAlamar : "+abas.alamat
      +"\nUmur : "+abas.umur
    );
  }
}

abas.info();
br();

var nama = "";
var email = "";
var nohp = "";

function Info(_nama,_email,_nohp){
  this.nama = _nama;
  this.email = _email;
  this.nohp = _nohp;
}

var Abas = new Info("Abas","akhmadbasir5@gmail.com","082139672355");

console.log(Abas.nama);
console.log(Abas.email);
console.log(Abas.nohp);
