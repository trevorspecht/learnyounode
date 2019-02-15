var net = require('net');
var tcpport = process.argv[2];

var server = net.createServer(function (socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();

  month = (month + 1);

  if(month < 10)
    month = ("0" + month);

  if(day < 10)
    day = ("0" + day);

  if(hour < 10)
    hour = ("0" + hour);

  var fulldate = year + "-" + month + "-" + day + " " + hour + ":" + minute;


  socket.end(fulldate + '\n');
});

server.listen(tcpport);
