const file_system = require('fs');

const handler = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body>Hello Everyone!</body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/users' && method === 'POST'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/data" method="POST"><input type="text" name="UserName"><button type="submit">Send</button></form></body>');
        res.write('<body><form action="/data" method="POST"><input type="password" name="Password"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
        };
        
        // const body = [];
        // req.on('data',(chunk)=>{
        //    console.log(chunk);
        //    body.push(chunk);

        req.on('end', () => {
            const paredBody = Buffer.concat(body).toString();
            const message = paredBody.split('=')[1];
            file_system.writeFileSync('./HomeWork/data.txt',message, err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    
    res.setHeader('Content-Type', 'users/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from Node.js Server!</h1></body>');
    res.write('</html>');
    res.end(); 
    };

exports.sh = handler;