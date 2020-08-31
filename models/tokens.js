const   bcrypt  = require('bcrypt'),
        jwt     = require('jsonwebtoken'),
        pool    = require('../config/mysql'),
        env     = require('../environnement');
const { json } = require('body-parser');

//User object create


var Tokens = function(token){
    this.id_user    = token.id_user;
    this.email      = token.email;
    this.type       = token.type;

};

Tokens.create =  function (data, result) {  

    var token = jwt.sign(data, env.jwt, {expiresIn :'24h'});
    //console.log(profil)
        pool.query("INSERT INTO `token`(`token`, `type`, `mail_user`) VALUES ('"+token+"','"+data.type+"','"+data.email+"')",  function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                res.result({'token':token});
            }
        }); 



}


Tokens.validate = function ( data, result){
    try {
    var profil = jwt.verify(data,env.jwt)
    // console.log(profil)

    pool.query("UPDATE user SET verified=1 WHERE id_user ="+profil.id_user,(error, results, fields) => {
        if (error){
          return error.message;
        }
        return (results.affectedRows);
      })
 
} catch (erreur) {
    console.log(erreur.name)
    result(erreur,null);

  }
}

// Tokens.reset = function ( data, result){
//     try {
//     var profil = jwt.verify(data,env.jwt)
//     // console.log(profil)

//     pool.query("UPDATE user SET verified=0 WHERE id_user ="+profil.id_user,(error, results, fields) => {
//         if (error){
//           return error.message;
//         }
//         return (results.affectedRows);
//       })
 
// } catch (erreur) {
//     console.log(erreur.name)
//     result(erreur,null);

//   }
// }


module.exports= Tokens;