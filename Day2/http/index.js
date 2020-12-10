var http = require('http');
var fs = require('fs');
var calc = require('hybrid-calculator');
var url = require('url');

// Create a server with different URL to understand
/**
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

*/


 CalculateDistance = (lat1, lon1, lat2, lon2) =>  {
      var R = 6371; // km
      var dLat = toRad(lat2-lat1);
      var dLon = toRad(lon2-lon1);
      var lat1 = toRad(lat1);
      var lat2 = toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d;
}

// Converts numeric degrees to radians
toRad = (Value) => {
    return Value * Math.PI / 180;
}




http.createServer((request, response) => {


    if (request.url.includes('/api/')) {
        
        const q = url.parse(request.url, true);

        from = q.query['from'].split(',');
        destination = q.query['dest'].split(',');

        from_lat = Number(from[0]);
        from_long = Number(from[1]);
        to_lat = Number(destination[0]);
        to_long = Number(destination[1]);

        distance = CalculateDistance(from_lat, from_long, to_lat, to_long);


        response.writeHead(200, {'Content-Type': 'text/json'});
        response.write(JSON.stringify({
            "from_latitude": from_lat,
            "from_longitude": from_long,
            "to_latitude": to_lat,
            "to_long": to_long,
            "distance_between": distance
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
    
            default:
                response.write("Oops something went wrong");
                response.end();
                break;
        }
    
    

    }
    
   

}).listen(8000);