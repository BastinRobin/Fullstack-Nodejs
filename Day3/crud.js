const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";


// Connect to Mongo server
// Insert record into `users` collections
MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, db) => {
    if (err) throw err;
    const database = db.db("todolist");
    // Insertion operation
    /**
        const user = { fname: Math.random().toString(36).substring(7), lname: "Smith", company: "Microsoft"};
        database.collection("users").insertOne(user,  (err, response) => {
            if (err) throw err;
            console.log("Document inserted");
            db.close();
        });
     */

    // Find a record
    /**
    database.collection("users").findOne({fname: '5i0b7o'}, (err, result) => {
        if (err) throw err;
        console.log(result.fname);
        console.log(result);
        db.close();
    });
    */

    // Query users collections
    /**
    const query = {};
    database.collection("users").find(query).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
    });
    */

    /**
     * Update query
     
        const query = {fname: "Daniel", age: 40};
        const updated_query = { $set: { fname: "Daniel M", age: 50, company: "Xerox", location: "Menlo Park"}};

        database.collection("users").updateOne(query, updated_query, (err, result) => {
            if (err) throw err;
            console.log("Updated the given record");
            db.close();
        });
    */

    // Delete Operations
    // const query = {fname: "Daniel", lname: "Tim"};
    // database.collection("users").deleteOne(query, (err, result) => {
    //     if (err) throw err;
    //     console.log("Record deleted");
    //     db.close();
    // });

});