const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title : String,
    description : String,
    isCompleted : {
        type : Boolean,
        default : false
    }
})


module.exports = mongoose.model('todo-list',TodoSchema);