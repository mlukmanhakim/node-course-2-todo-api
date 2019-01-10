// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unabel to connect into mongodb');
    }
    console.log('connected to mongodb server');
    // db.collection('Todos').find({
    //     _id : new ObjectID("5c3714c2d0b15d1360b7d5ec")
    // }).toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('unabel to fetch todos', err);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`todos count ${count}`);
    // }, (err) =>{
    //     console.log('unabel to fetch todos', err);
    // });
    db.collection('Users').find({name : "Lukman Hakim"})
    .count()
    .then((count) => {
        console.log(`Jumlah user dengan nama lukman hakim : ${count}`);

    }, (err) => {
          console.log('Unable to find users', err);  
    });

    // db.close();
});