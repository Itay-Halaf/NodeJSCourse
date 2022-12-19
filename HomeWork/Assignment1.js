const http = require('http');
const sh = require('./server_handler')

const myServer = http.createServer(sh.handler);

myServer.listen(3000);