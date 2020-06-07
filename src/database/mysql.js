const mysql = require('mysql'),
    env= require('../environnement')



var connection = mysql.createPool({
    host: env.bdd.mysql.host, 
    user: env.bdd.mysql.user,
    password: env.bdd.mysql.password,
    database: env.bdd.mysql.database
    });





module.exports =connection;