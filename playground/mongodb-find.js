//const MongoClient = require('mongodb').MongoClient;

// http://mongodb.github.io/node-mongodb-native/3.1/api/ 

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    /*db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err)=>{
        console.log('Unable to fecth todos', err);
    });*/

    db.collection('Users').find({name: 'Canis'}).count().then((count) => {
        console.log(`Users count Canis: ${count}`);
    }, (err)=>{
        console.log('Unable to fecth Users', err);
    });
    
    //client.close();
});