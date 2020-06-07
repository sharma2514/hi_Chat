module.exports.user = function(req, res){
    return res.render('user_profile', {
        title: "User Info"
    });
}