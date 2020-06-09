const bcrypt = require('bcrypt'),
    tokens  = require('./tokens')
    pool = require('../config/mysql')

//User object create
var Users = function(user){
    this.id_maison      = user.id_maison;
    this.username       = user.username;
    this.email          = user.email;
    this.password       = user.password;
    this.admin          = user.admin;
    this.avatar         = user.avatar;
};


Users.create = function (newUser, result) {    
    bcrypt.hash(newUser.password, 10, function(err, hash) {
        if(err) console.log(err);
        pool.query("INSERT INTO user(`id_maison`, `username`, `email`, `password`, `admin`,`avatar`) VALUES ("+null+",'"+newUser.username+"','"+newUser.email+"', '"+hash+"', "+newUser.admin+",'https://randomuser.me/api/portraits/thumb/men/" +Math.floor(Math.random()* Math.floor(80))+ ".jpg')",  function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                result(null, res.insertId);
            }
        }); 
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
                      console.log(tokens.create(info,res));
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