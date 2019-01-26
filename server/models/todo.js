var mongoose = require('mongoose');
<<<<<<< HEAD
var Todo  = mongoose.model('Todo', {
    text : {
        type : String,
        require : true,
=======

var Todo = mongoose.model('Todo', {
    text :{
        type : String,
        required : true,
>>>>>>> 13f93c090a7565fc37fcd16a2cf4372089abb18e
        minlength : 1
    },
    completed : {
        type : Boolean,
<<<<<<< HEAD
        default : false
=======
        default: false
>>>>>>> 13f93c090a7565fc37fcd16a2cf4372089abb18e
    },
    completedAt : {
        type : Number,
        default : null
    }
});

module.exports = {Todo};