const express = require('express')
const mongodb = require('mongodb')
const fs = require('fs');

const app = express()
let db;

let connectUrl = `mongodb://localhost:27017/simpletodo`;

mongodb.connect(connectUrl, {useNewUrlParser: true, useUnifiedTopology: true},
    (err, client) => {
    if (err) throw err;
    db = client.db();
    app.listen(8000);
    console.log("Listening to port 8000");
});

app.use(express.json());

/**
 * CRUD Operations
 */
app.get("/", (req, res, next) => {
    fs.readFile("todo.html", (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
    
});
/**
 * GET list of all items
 */
app.get('/api/items', (req, res, next) => {
    // Get list of all items in the array
    db.collection("todolist")
        .find()
        .toArray((err, items) => {
            res.send(items);
        });
});

/**
 * GET item which has matchin :item_id
 */
app.get('/api/items/:item_id', (req, res, next) => {
    db.collection('todolist')
        .findOne({
            _id: new mongodb.ObjectID(req.params.item_id)
        }, (err, item) => {
            res.send(item);
        });
});

/**
 * Create item into the list
 */
app.post('/api/items', (req, res, next) => {
    db.collection('todolist')
        .insertOne({
            content: req.body.text, 
            is_completed: false 
        }, (err, info) => {
            if (err) throw err;
            res.json(info.ops[0]);
        });
});

/**
 * Update the given api item
 */
app.put('/api/items/:item_id', (req, res, next) => {
    const item_id = req.params.item_id;
    db.collection('todolist')
        .findOneAndUpdate(
            {_id: new mongodb.ObjectID(item_id)},
            { $set:  req.body },
            (err, data) => {
                res.send({
                    "result": "success"
                });
            }
        )
});

/**
 * Deleted the items with item id
 */
app.delete("/api/items/:item_id", (req, res, next) => {
    const item_id = req.params.item_id;
    db.collection('todolist')
        .deleteOne({
            _id: new mongodb.ObjectID(item_id)
        }, (err, data) => {
            if (err) throw err;
            res.send({
                "result": "success",
                "message": `item has been deleted successfully`
            });
        })
    
});