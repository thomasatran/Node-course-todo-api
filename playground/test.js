const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
    if(err){
        return console.log('Unable to connect MongoDB server');

    }
    console.log('Connected to MongoDB server');
/*    const db = client.db('TodoApp');
    db.collection('Users').insertOne({
        name: "Thomas Tran",
        age: "20",
        locations: "San Diego"
    }, (err, result)=>{
       if(err){
           return console.log("Unable to connect to MongoDB");
       }
       console.log(result.ops[0]._id.getTimestamp());
    });*/
    const db = client.db('TodoApp');
    db.collection('Users').find({name: 'Thomas Tran'}).count().then((count)=>{
        console.log(`Count: ${count}`);
    }, (err)=>{
        if(err){
            consol.log('Unable to fetch todos', err);
        }
    });

/*   client.close();*/
});