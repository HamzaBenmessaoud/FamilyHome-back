const usersControllers = require('../controllers/usersControllers'),
    route = require('express').Router()


// Retrieve all employees
route.get('/findall', usersControllers.findAll);

// Create a new employee
route.post('/create', usersControllers.create);

// Retrieve a single employee with id
route.get('/:id', usersControllers.findById);

// Update a employee with id
// router.put('/:id', usersControllers.update);

// Delete a employee with id
route.delete('/:id', usersControllers.delete);

// Connect user
route.post('/connect', usersControllers.connect);

module.exports = route