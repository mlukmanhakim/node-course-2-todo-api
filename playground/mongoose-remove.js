const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');



// Todo.remove({}).then((result) =>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5c4d2ba29f5ff42013b57bc8').then((todo) =>{
    console.log(todo);
});

    