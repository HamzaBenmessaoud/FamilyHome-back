const bcrypt = require('bcrypt'),
    tokens  = require('./tokens'),
    env     = require('../environnement'),
    jwt     = require('jsonwebtoken'),
    pool = require('../config/mysql'),
    mail = require('../controllers/mail.confirm'),
    mailr = require('../controllers/mail.reset')


//User object create
var Users = function(user){
    this.id_maison      = user.id_maison;
    this.username       = user.username;
    this.email          = user.email;
    this.password       = user.password;
    this.admin          = user.admin;
    this.avatar         = user.avatar;
};

var ajoutToken= function(new_token){
    console.log(new_token)
   tokens.create(new_token,()=>{
        console.log('...')
    })
    if (new_token.type ==="verification") {
        mail.mailConfirm(new_token)
    } else {
        mailr.mailReset(new_token)
    }
    
}

Users.createadmin = function (newUser, result) {    
    bcrypt.hash(newUser.password, 10, function(err, hash) {
        if(err) console.log(err);
        pool.query("INSERT INTO user(`id_maison`, `username`, `email`, `password`, `admin`,`avatar`) VALUES ("+null+",'"+newUser.username+"','"+newUser.email+"', '"+hash+"', "+newUser.admin+",'https://randomuser.me/api/portraits/thumb/men/" +Math.floor(Math.random()* Math.floor(80))+ ".jpg')",  function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res.insertId);

                const payload = {
                    id_user: res.insertId,
                    email: newUser.email
                };
                

                var new_token ={
                    token : jwt.sign(payload, env.jwt, {expiresIn :'24h'}),
                    type : 'verification',
                    email : newUser.email
                }
                
                ajoutToken(new_token)
            }
        }); 
   });        
};

Users.create = function (newUser, result) {    

        pool.query("INSERT INTO user(`id_maison`, `username`, `email`, `password`, `admin`,`avatar`) VALUES ("+null+",'"+newUser.username+"','"+newUser.email+"', '000000', "+newUser.admin+",'https://randomuser.me/api/portraits/thumb/men/" +Math.floor(Math.random()* Math.floor(80))+ ".jpg')",  function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res.insertId);

                const payload = {
                    id_user: res.insertId,
                    email: newUser.email
                };
                

                var new_token ={
                    token : jwt.sign(payload, env.jwt, {expiresIn :'24h'}),
                    type : 'reset',
                    email : newUser.email
                }
                
                ajoutToken(new_token)
            }
        }); 
         
};


Users.findById = function (id, result) {
    pool.query("Select * from user where id_user = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Users.findAll = function (result) {
    pool.query("Select * from user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('Users : ', res);  
            result(null, res);
        }
    });   
};



Users.connect = function(data, res){
    var email       = data.email,
        pwd    = data.pwd;
        var sql="SELECT id_user, email,password FROM `user` WHERE `email`='"+email+"'";
        pool.query(sql, function(err, results){	   
            if(results != ""){
                let info ={
                    id_user : results[0].id_user,
                    email : results[0].email,
                    password : results[0].password,
                    type : 'connect'
                }


                bcrypt.compare(pwd, info.password, function(err, result) {
                    if(err)
                        console.log(err);
                    if(result){
                      tokens.create(info,res);
                    }
                });



            }else{
            console.log("not a user");
            }          
    });        
}       


Users.delete = function(id, result){
     pool.query("DELETE FROM users WHERE id_user = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};
// Pour l'instant pas de update pour user


// Users.update = function(id, User, result){
//   pool.query("UPDATE users SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [User.first_name,User.last_name,User.email,User.phone,User.organization,User.designation,User.salary, id], function (err, res) {
//         if(err) {
//             console.log("error: ", err);
//             result(null, err);
//         }else{   
//             result(null, res);
//         }
//     }); 
// };
module.exports= Users;