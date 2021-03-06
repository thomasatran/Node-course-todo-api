const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoos} = require('./db/mongoose');
let {Todo} = require('./models/todo.js');
let {User} = require('./models/user.js');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos', (req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    }, (e)=>{
        res.status(400).send(e);
    });
});

app.get('/todos/:id', (req, res)=>{
    let id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send('not a valid id');
    }
    Todo.findById(id).then((todo)=>{
       if(todo){
           return res.send({todo});
       }

       res.status(404).send('could not find id');
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.listen(3000, ()=>{
    console.log('Started on port 3000');
});

module.exports = {app};


