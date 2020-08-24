module.exports = (app) => {
    const notes = require('../controllers/notesControllers.js');

    // Create a new Note
    app.post('/create', notes.create);

    // Retrieve all Notes
    app.get('/findall', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/:noteId', notes.delete);
}