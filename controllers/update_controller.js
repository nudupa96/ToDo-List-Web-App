//require the DB which is store in task.js
const Task = require("../models/task");

//update will render this action
module.exports.update = function(req, res){
    res.render('update', {
        title: "Updating Tasks"
    });
};