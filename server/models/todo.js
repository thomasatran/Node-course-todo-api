
let mongoose = require('mongoose');

let Todo = mongoose.model('Todo', {
    text:{
        type: String,
        minLength: 1,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean
    },
    completedAt:{
        type: Number
    }
});

module.exports = {Todo};