var http = require('http');
http.createServer(function(req, res) {
            var post_data = '';
            req.on('data', function(chunk) {
                post_data += chunk;
            });
            req.on('end', function() {
                    console.log(post_data);
                });
                res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('hello here!');
            }).listen(8888); console.log('listen 8888!');