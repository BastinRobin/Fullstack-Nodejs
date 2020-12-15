const express = require('express');
const fs = require('fs');
const app = express();


app.get('/', (req, res, next) => {
    fs.readFile('app.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.listen(8000);
console.log("Listening to port 8000");
