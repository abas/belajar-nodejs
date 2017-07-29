exports.br = function() {
  console.log("==========================================");
}
function print(x) {
  console.log(x);
}
function printArray(Array){
  Array.forEach(function(item,i){
    print(item);
  });
}
var kontex = ["nama : ","Alamat : ","TglLahir :"];
var abas = ["Abas","Demak","09-12-Desember"];

var index=0;while (index<abas.length) {
  console.log(kontex[index]+abas[index]);
  index++;
}
// br();
abas.forEach(function(item,index){
  console.log(kontex[index]+item);
});
// br();
var array = [1];
printArray(array);
print("after push");
array.push(2);
printArray(array);
print("after shift");
array.shift();
printArray(array);
print("after unshift");
array.unshift(5);
printArray(array);
print("after pop");
array.pop(5);
printArray(array);
