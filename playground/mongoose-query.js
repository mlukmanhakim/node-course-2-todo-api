const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c4c0839a31c02781efc87c4'

Todo.find({
        _id : id
}).then((todos) =>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id : id
}).then((todo) =>{
console.log('Todo', todo);
});

Todo.findById(id).then((todo) =>{
    console.log('Todo', todo);
    });
    