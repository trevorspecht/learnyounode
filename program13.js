var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function (req, res) {
  if (req.method !== 'GET') {
    return res.end();
  };

  var urlobj = url.parse(req.url, true);

  if (urlobj.pathname == '/api/parsetime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var date = new Date(urlobj.query.iso);
    res.write(JSON.stringify({"hour":date.getHours(), "minute":date.getMinutes(), "second":date.getSeconds()}));
  };

  if (urlobj.pathname == '/api/unixtime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    date = new Date(urlobj.query.iso);
    res.write(JSON.stringify({"unixtime": date.getTime()}));
  };
  
  res.end();
});

server.listen(port);
