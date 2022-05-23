//require the DB which is store in task.js
const Task = require("../models/task");

// /home will render this action
module.exports.home = function(req, res){
    //find task(data) in DB and fetch it here
    Task.find({}, function(err, tasks){
        if(!err)
        {
            return res.render('home', {
                title: "My TODO List",
                task_list: tasks 
            });
        }
        console.log('Error in fetching contact from DB');
        return;
    });
};

//add task will render this action
module.exports.addtask = function(req, res){
    //populate the DB using the Task var in entry point
    Task.create({
        taskName: req.body.taskName,
        taskCategory: req.body.taskCategory,
        taskDate: req.body.taskDate 
    }, 
    function(err, newTask){
        if(!err)
        {
            console.log('######', newTask);
            return res.redirect('back');
        }
        console.log('Error in creating a task');
        return;
    });
};

module.exports.deletetask = function(req, res){
    //delete w.r.t id of the query
    let id = req.query.id;

    Task.findByIdAndDelete(id, function(err){
        if(!err)
        {
            return res.redirect('back');
        }
        console.log('Error in deleting task from DB');
        return;
    });
};