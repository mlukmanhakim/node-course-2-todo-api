// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('unabel to connect into mongodb');
    }
    console.log('connected to mongodb server');


//    db.collection('Todos').findOneAndUpdate({
//        _id : new ObjectID("5c374108ac636b2acb71e998")
//    }, {
//        $set : {
//            completed : true
//        }
//    }, {
//        returnOriginal : false
//    }).then((result) =>{
//        console.log(result);
//    });
   
   db.collection('Users').findOneAndUpdate({
    _id : new ObjectID('5c37227cac636b2acb71debb')
}, {
    $set : {
        completed : true
    },
    $inc : {
        age : 1
    }
}, {
    returnOriginal : false
}).then((result) =>{
    console.log(result);
});
    // db.close();
});