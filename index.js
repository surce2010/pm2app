let http = require('http');

http.createServer(function(req, res) {
	       res.end('pm2App')
}).listen(8001);

console.log('server running port 8001');
