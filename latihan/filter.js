var hargaMakanan  = [3000,4000,5000];
var hargaMakanan2 = [100,200,1000,3000,5000];


// FILTER
// var hargaSekarang = hargaMakanan.filter(function(e) {
//   return e > 3500 && e < 4500;
// });


function FilterHarga(harga,vMin,vMax) {
  var temp = harga.filter(function(e) {
    return e >= vMin && e <= vMax;
  });
  return temp;
}

var valueMin = 100;
var valueMax = 10000;

console.log(FilterHarga(hargaMakanan,valueMin,valueMax));
console.log(FilterHarga(hargaMakanan2,valueMin,valueMax));
