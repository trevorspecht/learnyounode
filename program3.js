var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var newlines = str.split('\n').length - 1;
// option:
// var newlines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// 'utf8' as a second argument returns a string

console.log(newlines);
