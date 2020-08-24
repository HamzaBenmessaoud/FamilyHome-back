const usersControllers = require('../controllers/usersControllers'),
    route = require('express').Router(),
    validator = require ('../utils/validator')


// Retrieve all users
route.get('/findall', usersControllers.findAll);

// Create a new user
route.post('/create',validator.verificate('create'), usersControllers.create);

// Create a new user
route.post('/newadmin',validator.verificate('newadmin'), usersControllers.createadmin);

// Retrieve a single user with id
route.get('/:id', usersControllers.findById);

// Update a user with id
// router.put('/:id', usersControllers.update);

// Delete a user with id
route.delete('/:id', usersControllers.delete);

// Connect user
route.post('/connect',validator.verificate('connect'), usersControllers.connect);

// update Username
route.post('/updateUsername', usersControllers.updateUsername);

// update pwd
route.post('/updatePwd', usersControllers.updatePwd);


// update notif
route.post('/updateNotification', usersControllers.updateNotification);

// update avatar
route.post('/updateAvatar', usersControllers.updateAvatar);


module.exports = route