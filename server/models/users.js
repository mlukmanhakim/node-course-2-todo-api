var mongoose = require('mongoose');
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
    }
});

module.exports = {Users};