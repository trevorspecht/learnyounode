var filter = require('./filterbyext');
var pathname = process.argv[2];
var fileext = process.argv[3];

filter(pathname, fileext, function(err, files) {
  if (err) console.log(err);
  files.forEach(function (file) {
    console.log(file);
  });
});
