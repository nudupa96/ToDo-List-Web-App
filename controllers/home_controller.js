// /home will render this action
module.exports.home = function(req, res){
    res.render('home', {
        title: "Home"
    });
};