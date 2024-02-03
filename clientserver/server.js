const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    //console.log(req.url, req.method);
    //lodash
    const num = _.random(0,20);
    console.log(num);


    const greet = _.once(() => {
        console.log('hello');
    });

    greet();
    greet();

    //set header content type
    res.setHeader('Content-Type', 'text/html');


    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
            //for redirect eg
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    //res.write('Hello Waleed');
    //res.end();

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port number');
});

//local host like a domain name on the web.Local
//port numbers are like 'doors' into a computer. PORT
//-------------------------------
//routing
//path is routing

//Status codes describe the type of response sent to the browser.
//100 for(range- informational responses)
//200 for Ok(Range for success code)
//301 for resources moved(range-codes for redirect)
//404 for not found(range- user or client error codes)
//500 for internal server error(range - server error codes)
//----------------------------------
//redirect