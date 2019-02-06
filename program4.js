var fs = require('fs');
var number;

fs.readFile(process.argv[2], 'utf8', function (err, data) {
  if (err) throw err;
  number = data.split('\n').length - 1;
  console.log(number);
});
