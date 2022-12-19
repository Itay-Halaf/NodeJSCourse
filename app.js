// ./ before the require means it will import the local folder file in this example ./http means local file

//const http = require('./http');
const http = require('http');

const routes = require('./routes');

//function rqListener(req, res) {
//
//}
console.log(routes.someText);

const server = http.createServer(routes.handler
    //console.log(req.url, req.method, req.headers);
    //process.exit();
    );

server.listen(3000);