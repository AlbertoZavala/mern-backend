// Here we going to define the model of the object Note.

// As we are using mongodb, we will use mongoose to create this models
const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    // Each time we create a new data, it will be created
    // creation date and modification date
    timestamps: true 
});

// It will be create a collection called Notes 
module.exports = model('Note', noteSchema);
