// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var user = { name :'Lukman', age:24};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unabel to connect into mongodb');
    }
    console.log('connected to mongodb server');
    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name : 'Lukman',
    //     age : 24,
    //     location : "Praya" 
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Users', err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});