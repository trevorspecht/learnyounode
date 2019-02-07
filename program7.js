var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
    res.on("data", function(data) {
      console.log(data);
  }).setEncoding('utf8');
}).on('error', function(err){});
