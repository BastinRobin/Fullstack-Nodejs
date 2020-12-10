
## Day 2 - Node js and internals

1. Node modules - Done
2. Node HTTP Modules - Done
3. Node File Systems - Done
4. Node URL Parsing - Done
5. NPM manager - Done
6. Node Email - TODO
7. Node with MongoDB

    ## Challenge
    Write a simple API `/api/bmi` and pass the necessary parameters in query string 
    `height` and `weight`. Write a BMI calculation function and use it to calculate
    BMI and expose it a `API JSON format` like the calculator.


## Day 3  - Frontend (Vue and Bootstrap)
1. What is Vuejs
2. How Vue is different from vanilla js or Jquery
3. What MVC architecture in Vue
4. Vue components

## Day 4 - Start creating the P2P Application
1. Design the schema
2. Decide the API's 
3. Create the API using Nodejs
4. Test all API'schema
5. Build a Basic Vue Application

## Day 5 
1. Vue components
2. Fetch API calls to components
3. Test with POSTMAN

## Day 6
1. Integerating all services
2. Testing and Deploying. 










## MySQL Terminologies
- Databases
    - Tables
        - Records

````
    # User table
    id | fname | lname | age | gender | gst_no
````

## MongoDB Terminologies
- Databases
    - Collections
        - Documents

````
user = {
    fname: "Robin",
    lname: "J",
    gender: 'male'
    subjects: ["English", "Math", "Science"],
    created: "20 years"
}

user1 = {
    fname: "Robin",
    lname: "J",
    gender: 'male'
}

use SimpleDB;

// bsonid
db.users.insertOne(user);

// bsonid
db.users.insertOne(user1);

db.profiles.insertOne(user);

````
