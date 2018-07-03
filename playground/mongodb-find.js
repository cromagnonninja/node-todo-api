//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

var user = {name: 'Bhanu', age: 19};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server!');
    const db = client.db('TodoApp');

   db.collection('Users').find({
       name: 'Bhanu Bhandari'}).toArray().then((docs) => {
        console.log('Users!'); 
        console.log(JSON.stringify(docs, undefined, 2));
   }, (err)=> {
        console.log('Unable to fetch users.', err);
   });

// db.collection('Todos').find({
//     _id: new ObjectID('5b3b9db76e270e68363b4b15')}).count().then((count) => {
//      console.log(`Todos count: ${count}`); 
//      console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=> {
//      console.log('Unable to fetch todos.', err);
// });

    //client.close();
});