var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(function (req, res) {
  var filestream = fs.createReadStream(filepath);
  filestream.pipe(res);
});

server.listen(port);
