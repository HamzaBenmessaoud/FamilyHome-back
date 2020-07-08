const Users = require('../models/users')
const { body, validationResult } = require('express-validator');


exports.findAll = function(req, res) {
  Users.findAll(function(err, user) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', user);
    res.send(user);
  });
};


exports.createadmin = function(req, res) {

  

  const new_user = new Users(req.body);

  //handles null error 

      Users.createadmin(new_user, function(err, new_user) {
          if (err)
          res.send(err);
          res.json({error:false,message:"User added successfully!",data:new_user});
  });
};

exports.create = function(req, res) {

  const new_user = {
    username  : req.body.username,
    email     : req.body.email,
    admin     : req.body.admin};

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

exports.connect = function(req, res){
  var data ={
      email : req.body.email,
      pwd: req.body.pwd
  }
  Users.connect(data, function(err, token) {
    if(err)
      res.send(err);
    res.json(token)
  });
}
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