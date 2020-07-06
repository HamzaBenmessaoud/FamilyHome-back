const Tokens = require('../models/tokens'),
pool    = require('../config/mysql'),
jwt     = require('jsonwebtoken'),
env     = require('../environnement');

exports.create = function(req, res) {

    const new_token = new Tokens(req.body);

    //handles null error 

        Tokens.create(new_token, function(err, new_token) {
            if (err)
            res.send(err);
            res.json({error:false,message:"token added successfully!",data:new_token});

    });
};

exports.validate = function(req, res) {
    
    try {
        var profil = jwt.verify(req.params.token,env.jwt)
        // console.log(profil)
    
        pool.query("UPDATE user SET verified=0 WHERE id_user ="+profil.id_user,(error, results, fields) => {
            if (error){
                console.log(error.message)
            }
           
            res.json({error:false,message:results.affectedRows})
          })
     
    } catch (erreur) {
        res.status(400).send(erreur.message)
        
    
      }
    }
