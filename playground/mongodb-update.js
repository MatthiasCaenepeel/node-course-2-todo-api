//const MongoClient = require('mongodb').MongoClient;

// http://mongodb.github.io/node-mongodb-native/3.1/api/ 
// https://docs.mongodb.com/manual/reference/operator/

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    /*
    db.collection('Todos').findOneAndUpdate({_id : new ObjectID('5b769f2c9ef5711fa0f73a0a')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate({_id : new ObjectID('5b768f95ea991505543cfff4')
    }, {
        $set: {
            name: 'Adrian',
            location: 'Mars'
        }, $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    //client.close();
});