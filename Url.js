
var url = require('url');
var adr = 'http://localhost:8080/new.htm?year=2023&month=June';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2023, month: 'June' }
console.log(qdata.month); //returns 'february'
