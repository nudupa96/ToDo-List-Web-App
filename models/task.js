//In models, create the DB where I'll be storing the tasks
const mongoose = require('mongoose');

//Create the Schema - Model of the data
//Only taskName was compulsory, category and date were not
const taskSchema = new mongoose.Schema({
    taskName: {
        type: String,
        required: true
    },
    taskCategory: {
        type: String,
        required: false
    },
    taskDate: {
        type: Date,
        required: false
    }
});

//name of collection(signified by DB) in which Schema will be used/stored
//here I named task to indicate a task to-do
const Task = mongoose.model('Task', taskSchema);

//and need to export this
module.exports = Task;

