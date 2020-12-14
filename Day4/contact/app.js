const express = require('express')
const mongodb = require('mongodb')
const fs = require('fs');

let app = express();
let db;

let connectUrl = `mongodb://localhost:27017/contact_manager`;
mongodb.connect(connectUrl, { useNewUrlParser: true, useUnifiedTopology: true},
    (err, client) => {
    if (err) throw err;
    db = client.db();
    app.listen(8000);
    console.log(`Listening to port: 8000`);
});

/**
 * Express to consider all request with json as middleware
 */
app.use(express.json());

app.get('/', (req, res, next) => {
    fs.readFile('app.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    });
});


/**
 * Insert data into the collections - `POST`
 * Update data into the Collections - `PUT`
 * Fetch all contacts from the collections - `GET`
 * Fetch single contacts from the collections - `GET`
 * Delete single contact using id - `DELETE`
*/

/**
 * Fetch all contacts
 */
app.get('/api/contacts', (req, res, next) => {

    db.collection('contacts')
        .find()
        .toArray((err, items) => {
            if (err) throw err;
            res.send(items);
        })
});

/**
 * Fetch only the contact with given `contact_id`
 */
app.get('/api/contacts/:contact_id', (req, res, next) => {
    db.collection('contacts')
        .findOne(
            {_id: new mongodb.ObjectID(req.params.contact_id)},
            (err, data) => {
                res.send(data);
            }
        )
});

/**
 * Insert new contact into the collections
 */
app.post('/api/contacts', (req, res, next) => {
    db.collection('contacts')
        .insertOne(req.body, (err, item) => {
            res.json(item.ops[0]);
        })
});

/**
 * Update the contact with `contact_id` 
 */
app.put('/api/contacts/:contact_id', (req, res, next) => {
    db.collection('contacts')
        .findOneAndUpdate(
            {_id: new mongodb.ObjectID(req.params.contact_id)},
            { $set: req.body },
            (err, item) => {
                res.json({
                    result: "success",
                    message: "updated successfully"
                })
            }
        )

});

/**
 * Delete the contact with the `contact_id`
 */
app.delete('/api/contacts/:contact_id', (req, res, next) => {
    db.collection('contacts')
        .deleteOne(
            {_id: new mongodb.ObjectID(req.params.contact_id)},
            (err, item) => {
                res.json({
                    "result": "success",
                    "message": "deleted successfully"
                })
            }
        )
});



/**
 * DOCUMENTATION
 * [GET]: /api/contacts - Returns all contacts - DONE
 * [GET]: /api/contacts/907878797979 - Return only the contact matching given number - DONE
 * [POST]: /api/contacts - Create a new contact - DONE
 * [PUT]: /api/contacts/907878797979 - Find the record matching `907878797979` and update it - DONE
 * [DELETE]: /api/contacts/907878797979 - Delete the record matching `907878797979` - DONE
 */