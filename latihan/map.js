function print(variable) {
  console.log(variable);
}


var harga = [1000,2000,3000,4000,5000];

// MAPING ON VARIABLE
var newHarga = harga.map(function(e){
  return e*2;
});

// MAPPING ON FUNCTION
function MapHarga(varMap,Value){
  var temp = varMap.map(function(e) {
    return e*Value;
  });
  return temp;
}

print("MAP WITH VARIABLE");
print("harga sebelum mapping : "+harga);
print("harga setelah mapping : "+newHarga);

harga = [1000,2000,3000,4000,5000];
var auto = 1;

print("\nMAP WITH FUNCTION");
print("harga sebelum mapping : "+MapHarga(harga,auto));
print("harga setelah mapping : "+MapHarga(harga,2));

var New = require('./array');
// New.br();
