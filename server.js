var http = require('http');

http.createServer(function (req, res) {
  res.write('hello world');
}).listen(9000);