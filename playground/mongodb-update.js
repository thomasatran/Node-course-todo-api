const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=> {
    if (err) {
        return console.log('Unable to connect MongoDB server');

    }
    console.log('Connected to MongoDB server');
    let db = client.db('TodoApp');
    db.collection('Users').deleteMany({name: 'Thomas Tran'}).then((result)=>{
        console.log(result);
    });
});