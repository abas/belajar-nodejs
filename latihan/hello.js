console.log("hello wolrd");

var nama = "abas";
var umur = 19;
var alamat = "Demak";

function Abas(status) {
  // console.log("Nama : "+nama+"\nUmur : "+umur+"\nAlamat : "+alamat);
  if(umur < 20){
    // console.log("masih kece");
    status = "masih kece";
    return status;
  }
}
// meng output fungsi Abas
console.log(Abas());
console.log("========================");

// membuat variable menjadi fungsi
var tambah = function(a,b){
  return a+b;
};
// memanggil fungsi
var hasil = tambah(10,20);
console.log(hasil);

console.log("========================");
// fungsi sebagai argumen
function buatAngka(x) {
  var y = x + 10;
  console.log(x+"+10="+y);
}
// callback fungsi, untuk memanggil fungsi lain
function tesAngka(x,callBack) {
  callBack(x);
}
// tes callBack
tesAngka(10,buatAngka);
console.log("========================");
function cekUmur() {
    if (umur<20) {
      console.log("masih kece");
    }else if (umur==20) {
      console.log("mulai dewasa");
    }else {
      console.log("dewasa");
    }
}

function StatusUmur(callBack) {
  callBack();
}
StatusUmur(cekUmur);
