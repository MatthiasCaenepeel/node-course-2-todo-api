//const MongoClient = require('mongodb').MongoClient;

// http://mongodb.github.io/node-mongodb-native/3.1/api/ 

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    // deleteMany
    /*db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
        console.log(result);
    });*/

    // deleteOne
    /*db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
        console.log(result);
    });*/
    // findOneAndDelete
    /*db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });*/

    db.collection('Users').findOneAndDelete({_id : new ObjectID('5b75ac39905b24323c37c9b9')}).then((result)=>{
        console.log(result);
    });

    db.collection('Users').deleteMany({name: 'Canis'}).then((result)=>{
        console.log(result);
    });

    //client.close();
});