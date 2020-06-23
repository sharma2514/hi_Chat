const User = require('../models/user');


module.exports.user = function(req, res){
    User.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: "User Profile",
            profile_user: user
        });
     });    
}


module.exports.update = function(req, res){
    if(req.user.id == req.params.id){
       User.findByIdAndUpdate(req.params.id, /*{name: req.body.name, email: req.body.email}*/ req.body, function(err, user){
           return res.redirect('back');
       });
    }else{
        return res.status(401).send('Unauthorized');
    }
}



// render the sign Up form
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/user');
    }

    return res.render('user_sign_up', {
        title: "hi_Chat | Sign Up"
    });
}

// render the sign In form
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/user');
    }

    return res.render('user_sign_in', {
        title: "hi_Chat | Sign In"
    });
}


// get the sign up data
module.exports.create = function(req, res){
    // TODO
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in finding User in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('Error in creating user');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    });
}


// sign in and create session for user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destorySession = function(req, res){
    req.logout();
    return res.redirect('/');
}