var http = require('http');
var url = process.argv[2];
// var body = '';

var req = http.request(url, function (res) {
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

req.end();


// var req = http.request(options, function (res) {
//   req.on('response', function (res) {
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//       body += chunk;
//     });
//     res.on('end', function () {
//       console.log(body);
//     });
//   });
// });
//
// req.on('error', function (e){
//   console.log(e.message);
// });
//
// req.end();
