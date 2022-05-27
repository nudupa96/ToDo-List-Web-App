//require the DB which is store in task.js
const Task = require("../models/task");

// /home will render this action(read)
module.exports.home = function(req, res){
    //find task(data) in DB and fetch it here
    Task.find({}, function(err, tasks){
        if(err)
        {
            console.log('Error in fetching contact from DB');
            return;
        }
        return res.render('home', {
            title: "My TODO List",
            task_list: tasks 
        });
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
    function(err, newtask){
        if(err)
        {
            console.log('Error in creating a task');
            return;
        }
        console.log('######', newtask);
        return res.redirect('back');
    });
};

module.exports.deletetasks = function(req, res){
    let taskIDs = req.body['taskIDs[]'];
    //here req.body.taskIDs was not used as taskIDs is an array

    //delete many mongose query
    //find _id in taskIDs and then the callback function
    Task.deleteMany( {_id: { $in: taskIDs} }, function(err){
        if(err) {
            //returning a JSON response for 404 status code
            return res.status(404).json({
                error: err
            })
        }

        return res.status(200).json({
            taskIDs: taskIDs
        })
    });
};