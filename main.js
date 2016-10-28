var http = require('http');
var child_process = require("child_process");
http.createServer(function(req, res) {
    var post_data = '';
    req.on('data', function(chunk) {
        post_data += chunk;
    });
    req.on('end', function() {
        child_process.execSync('git pull origin master');
    });
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('get push post!');
}).listen(8888);