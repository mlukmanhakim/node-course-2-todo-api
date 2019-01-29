var {Users} = require('./../models/users');
var auth = (req, res, next) => {
    var token = req.header('x-auth');
    Users.findByToken(token).then((user)=>{
        if(!user){
            return Promise.reject();
        }
        // res.send(user);
        req.user = user;
        req.token = token;
        next();
        }).catch((e) =>{
        res.status(401).send();
    });
};

module.exports = {auth};