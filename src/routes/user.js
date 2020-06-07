const Users = require('../controllers/usersControllers'),
    route = require('express').Router()


//route.post('/add', Users.createUser)
//route.get('/list', Users.listUser)
route.get('/test', Users.test)


module.exports = route