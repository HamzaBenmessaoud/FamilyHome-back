const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    idHome: Integer,
    autor: Number,
    content: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Notes', NoteSchema);