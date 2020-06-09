const tokensControllers = require('../controllers/tokensControllers'),
    route = require('express').Router()

// Create a new employee
route.post('/add', tokensControllers.create);



module.exports = route
