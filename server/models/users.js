var mongoose = require('mongoose');
<<<<<<< HEAD
var Users = mongoose.model('Users', {
    name : {
        type : String,
        minlength : 1,
        require : true
    },
    age : {
        type : Number,
        default : null,
        require : true
=======

var Users = mongoose.model('Users', {
    email : {
        type : String,
        require : true, 
        trim : true,
        minlength : 1
>>>>>>> 13f93c090a7565fc37fcd16a2cf4372089abb18e
    }
});

module.exports = {Users};