var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello here!');
}).listen(8888);
console.log('listen 8888!');