const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User}= require('./../server/models/user');


let id = '5b2fd84f50cb182f84fbe519';
/*Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos',todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo', todo);
});*/

User.findById('5b2fd84f50cb182f84fbe519').then((user)=>{
    console.log('User', user);
}).catch((e)=>console.log(e));
