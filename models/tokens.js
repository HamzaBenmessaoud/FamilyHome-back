const   bcrypt  = require('bcrypt'),
        jwt     = require('jsonwebtoken'),
        pool    = require('../config/mysql'),
        crypto  = require('crypto'),
        env     = require('../environnement')

//User object create


var Tokens = function(token){
    this.id_user    = token.id_user;
    this.email      = token.email;
    this.type       = token.type;

};

Tokens.create = function (data, result) {  
    const payload = {
        id_user: data.id_user,
        email: data.email
    };

    /**
     * ici je dois verifier le type du token demandé ( connexion, inscription, reinitilisation)
     * 
     * 
     */

    var token = jwt.sign(payload, env.jwt, {expiresIn :'24h'});
    // var profil = jwt.verify(token,env.jwt)
    //console.log(profil)
        pool.query("INSERT INTO `token`(`token`, `type`, `mail_user`) VALUES ('"+token+"','"+data.type+"','"+data.email+"')",  function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(token)
                result(null,token);
            }
        }); 



}
module.exports= Tokens;