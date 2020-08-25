const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    idHome: Number,
    autor: String,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Notes', NoteSchema);