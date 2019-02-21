var fs = require('fs');
var path = require('path');
var filearray = [];

function filter(pathname, fileext, callback) {
  fs.readdir(pathname, function(err, list) {
    if (err) return callback (err);
    list.forEach(function(file) {
      if (path.extname(file) === '.' + fileext) {
        filearray.push(file);
      };
    });
    callback (null, filearray);
  });
};

module.exports = filter;
