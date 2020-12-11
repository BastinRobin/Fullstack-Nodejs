
## Basic MongoDB terminologies 
 
### CRUD Operations
- CREATE
- RETRIEVE
- UPDATE
- DELETE

## Terminologies
    - Databases are called databases
    - Tables are called as collections
    - Columns are called as attributes
    - Row is called as records


````
# eg: DATAMODEL
user = {
    fname: 'Robin',
    dept: 'cse',
    branch: 'CS',
    joined: '28/10/2020`
}


users = [
    {
        fname: 'Robin',
        dept: 'cse',
        branch: 'CS',
        joined: '28/10/2020`
    },
    {
        fname: 'Jack',
        dept: 'cse',
        branch: 'MECH',
        joined: '18/10/2020`
    }
]

````

## How to use MongoDB
- Create database or use existing database `use dbname` (Fetch or Create Database)
- To create tables aka (collections) we can use `db.collectionName` eg `db.users` `db.profile` `db.transaction`.
- To insert a record into any collection `db.collectionName.insertOne | db.collectionName.insertMany`
    eg `db.users.insertOne()` `db.profile.insertMany()`
- To get all records inside a collection `db.users.find()` 
- To get a record which has an `id=10` `db.users.find({id:10})`.
- To insert many records `db.users.insertMany(users)`



UPDATE SET fname='bastinrobin' From Users where id=10;