const express = require('express');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

const app = express();
let db;
const url = "mongodb://localhost:27017/";

// Initalize the connection
MongoClient.connect(
    url, { useNewUrlParser: true, 
    useUnifiedTopology: true }, (err, database) => {
        if (err) throw err;
        db = database.db("todolist");
});

app.get("/", (req, res, next) => {
    // db.collection("users").find({}, (err, users) => {
    // });
    fs.readFile('home.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
});

app.get("/todolist", (req, res, next) => {
    fs.readFile('index.html', (err, data) => {
        res.write(data);
        res.end();
    });
});

app.get("/v1", (req, res, next) => {
    fs.readFile("todo.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
    
});



app.listen(8000);
console.log(`Listening to port 8000`);

