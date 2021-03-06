require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');
var {mongoose} = require('./db/mongoose');
var {Todo}  = require('./models/todo');
var {Users} = require('./models/users');
var {auth} = require('./middleware/auth');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
    var todo = new Todo({
        text : req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) =>{
        res.status(400).send(e); 
    });
});

app.post('/users', (req, res) =>{
    var body = _.pick(req.body, ['email', 'password']);
    var user = new Users(body);

    user.save().then(() =>{
        return user.generateAuthToken();
     }).then((token) =>{
        res.header('x-auth', token).send(user)
    }).catch((e) =>{
        res.status(400).send(e);
    })
});

app.get('/users/me', auth, (req, res) =>{
   res.send(req.user);
});

app.get('/todos', (req, res) =>{
    Todo.find().then((todos) =>{
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res) =>{
    var id = req.params.id
    if(!ObjectID.isValid(id)){
        return res.status(404).send(); 
    }

    Todo.findById(id).then((todo) =>{
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) =>{
        res.status(404).send();
    })
})

app.delete('/todos/:id', (req, res) =>{
    var id = req.params.id;
    if(!ObjectID.isValid){
        return res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) =>{
        res.status(404).send();
    });
});

app.patch('/todos/:id', (req, res) =>{
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);
    if(!ObjectID.isValid){
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) =>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e) =>{
        res.status(404).send();
    })

});

app.listen(port, () =>{
    console.log(`Server running on port  ${port}`);
});

module.exports = {app};
