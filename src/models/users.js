const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    pool = require('../database/mysql')


///////////////


//User object create
var Users = function(user){
    this.id_maison      = user.id_maison;
    this.username       = user.username;
    this.email          = user.email;
    this.password       = user.password;
    this.admin          = user.admin;
};


Users.create = function (newUser, result) {    
    console.log(newUser.password);
    // bcrypt.hash(newUser.password, 10,null, (err, hash)=>{
    //     if(err) console.log(err);
    bcrypt.hash('myPassword', 10, function(err, hash) {
        if(err) console.log(err);
        pool.query("INSERT INTO user(`id_maison`, `username`, `email`, `password`, `admin`) VALUES ("+null+",'"+newUser.username+"','"+newUser.email+"', '"+hash+"', "+newUser.admin+")",  function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(err, null);
            }
            else{
                console.log(res.insertId);
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
            result(null, err);
        }
        else{
            console.log('Users : ', res);  
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

module.exports= Users;