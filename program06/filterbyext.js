var fs = require('fs');
var path = require('path');

function filter(pathname, fileext, callback) {
  fs.readdir(pathname, function(err, list) {
    if (err) return callback (err);
    list.forEach(function(file) {
      if (path.extname(file) === '.' + fileext)
      callback (null, file);
    });
  });
};

module.exports = filter;
