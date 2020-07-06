const tokensControllers = require('../controllers/tokensControllers'),
    route = require('express').Router()

// Create a new token
route.post('/add', tokensControllers.create);

// active account
route.get('/:token', tokensControllers.validate);

// reset password 
route.get('/res/:token', tokensControllers.reset);


module.exports = route
