var mongoose = require('mongoose');

var Users = mongoose.model('Users', {
    email : {
        type : String,
        require : true, 
        trim : true,
        minlength : 1
    }
});

module.exports = {Users};