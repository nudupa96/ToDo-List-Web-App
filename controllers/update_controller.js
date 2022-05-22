//update will render this action
module.exports.update = function(req, res){
    res.render('update', {
        title: "Updating Tasks"
    });
};