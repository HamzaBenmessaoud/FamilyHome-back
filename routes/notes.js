
const notes = require('../controllers/notesControllers.js');
route = require('express').Router()


// Create a new Note
route.post('/create', notes.create);

// Retrieve all Notes
route.get('/findall', notes.findAll);

// Retrieve a single Note with noteId
route.get('/:noteId', notes.findOne);

// Update a Note with noteId
route.put('/:noteId', notes.update);

// Delete a Note with noteId
route.delete('/:noteId', notes.delete);

module.exports = route