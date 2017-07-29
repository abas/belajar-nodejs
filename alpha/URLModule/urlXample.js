var url = require('url');
var adr = 'http://localhost:8000/default.htm?year=2017&month=february';
var q = url.parse(adr,true);

console.log(q.host); // return 'localhost:8000'
console.log(q.pathname); //return '/default.htm'
console.log(q.search); //return 'after all'

var qdata = q.query;
console.log(qdata);
