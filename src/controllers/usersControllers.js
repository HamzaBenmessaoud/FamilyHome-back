const Users = require('../models/users'),

    pool = require('../database/mysql')


exports.findAll = function(req, res) {
  Users.findAll(function(err, user) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', user);
    res.send(user);
  });
};


exports.create = function(req, res) {

    const new_user = new Users(req.body);

    //handles null error 

        Users.create(new_user, function(err, new_user) {
            if (err)
            res.send(err);
            res.json({error:false,message:"User added successfully!",data:new_user});

    });
  };



exports.findById = function(req, res) {
    Users.findById(req.params.id, function(err, user) {
        if (err)
        res.send(err);
        res.json(user);
    });
};

// Meme raison que sur le model


// exports.update = function(req, res) {
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         Users.update(req.params.id, new Users(req.body), function(err, user) {
//             if (err)
//             res.send(err);
//             res.json({ error:false, message: 'User successfully updated' });
//         });
//     }
  
// };


exports.delete = function(req, res) {
  Users.delete( req.params.id, function(err, user) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'User successfully deleted' });
  });
};