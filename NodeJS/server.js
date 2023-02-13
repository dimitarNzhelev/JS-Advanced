//const url = new URL('/catalog?page=4', 'http://localhost:3000');
//console.log(url.href);
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

    let path = './';

    switch(req.url){
    
        case '/':
            path+='index.html';
            break;
        default:
            path+='404.html';
            break; 
        
    }

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err);
            res.end();
        }else {
            res.end(data);
        }
    })
});

server.listen(8000, 'localhost',() => {
    console.log('listening on port 8000');
});