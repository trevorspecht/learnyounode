var http = require('http');
var url = process.argv[2];

var req = http.get(url, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    body += chunk;
  });
  res.on('end', function () {
    console.log(body.length);
    console.log(body);
  });
});

req.on('error', function (e) {
  console.log(e.message);
});
