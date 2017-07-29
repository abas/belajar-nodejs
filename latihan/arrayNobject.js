function print(variable){
    console.log(variable);
}

function br() {
  console.log("===========================");
}

var mhs = [
  {
    nama:"Ahmad Basir",
    nim:"A11.2015.09101",
  },
  {
    nama:"Ihsanul Mahdan",
    nim:"A11.2013.06455"
  },
  {
    nama:"Setyadi Putra",
    nim:"A11.2014.05615"
  }
];
var x=0;
mhs.forEach(function(item,index) {
  x++;
  if(x==mhs.length){
    print("total x : "+x);
  }
});

br();

for(var index = 0;index<x;index++){
  print("Nama : "+mhs[index].nama+"\nNim  : "+mhs[index].nim);
  print("\n");
}
