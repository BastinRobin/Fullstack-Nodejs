var http = require('http');
var fs = require('fs');
var calc = require('hybrid-calculator');
var url = require('url');

// create a server
// http.createServer((request, response) => {
//     response.write("Welcome to HTTP modules");
//     response.end();
// }).listen(8000);


// Create a server with different URL to understand
http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});

    if (request.url.includes('/api/calculator')) {
        const q = url.parse(request.url, true);
        first = Number(q.query['first']);
        second = Number(q.query['second']);
        mode=q.query['mode'];
        const cal = new calc.Calculator(first, second);
        result = '';
        switch(mode) {
            case 'add':
                result = cal.addition();
                break;
            case 'sub':
                result = cal.subtract();
                break;
            case 'mul':
                result = cal.multiply();
                break;
            case 'div':
                result = cal.division();

        }
        response.writeHead(200, {'Content-Type': 'text/json'});
        response.write(JSON.stringify({
            "first": first,
            "second": second,
            "mode": mode,
            "data": result
         }));
        response.end();

    } else {

        switch(request.url) {

            case '/':
                fs.readFile('homepage.html', (err, data) => {
                    if (err) throw err;
                    response.write(data);
                    response.end();
                });
                break;
            case '/about':
                fs.readFile('about.html', (err, data) => {
                    if (err) throw err;
                    response.write(data);
                    response.end();
                });
                break;
            case '/contact':
                fs.readFile('contact.html', (err, data) => {
                    if (err) throw err;
                    response.write(data);
                    response.end();
                });
                break;
    
            case '/sample':
                fs.readFile('contact.html', (err, data) => {
                    if (err) throw err;
                    response.writeHead(200, {'Content-Type': 'text/plan'});
                    response.write(data);
                    response.end();
                });
                break;
    
            default:
                response.write("Oops something went wrong");
                break;
        }
    

    }

  

    // response.write(request.url);
    // response.end();
}).listen(8000);