//Notes.js not notes.js --> to show this is a model
//creating schema
const mongoose = require('mongoose');
const {Schema} = mongoose;

const NoteSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, //kind of like foreign key --> which user is present
        ref: 'User' //reference model, refer to User model
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },

});
const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;