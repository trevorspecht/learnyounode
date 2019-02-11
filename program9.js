var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];
var response = [];

http.get(url1, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    body += chunk;
  });
  res.on('end', function () {
    response[0] = body;
    if (response[0] && response[1] && response[2]) {
      console.log(response[0]);
      console.log(response[1]);
      console.log(response[2]);} else {
        return;
      };
  });
  res.on('error', function (e) {
    console.log(e.message);
  });
});

http.get(url2, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    body += chunk;
  });
  res.on('end', function () {
    response[1] = body;
    if (response[0] && response[1] && response[2]) {
      console.log(response[0]);
      console.log(response[1]);
      console.log(response[2]);} else {
        return;
      };
  });
  res.on('error', function (e) {
    console.log(e.message);
  });
});

http.get(url3, function (res) {
  var body = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    body += chunk;
  });
  res.on('end', function () {
    response[2] = body;
    if (response[0] && response[1] && response[2]) {
      console.log(response[0]);
      console.log(response[1]);
      console.log(response[2]);} else {
        return;
      };
  });
  res.on('error', function (e) {
    console.log(e.message);
  });
});
