const http = require('http');
const bodyParser = require('body-parser');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    if(req.url === "/"){
        res.writeHead(200);
        res.write("<h1>Welcome to the homepage</h1>");
        res.end();
    }
    else if(req.url === "/about"){
        res.writeHead(200);
        res.write("<h1>Welcome to the about page</h1>");
        res.end();
    }
    else {
        res.writeHead(404);
        res.write("<h1>404 Page not found</h1>");
        res.end();
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});