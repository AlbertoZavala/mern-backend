// This file will be implemented on routes and will be in charge of 
// control all functions related with notes.

// We declare the notesController object.
const notesController = {};

const Note = require('./../models/Note');
// Importing the model that we gonna use
const NoteModel = require('./../models/Note');

// Get all notes.
notesController.getNotes = async (req, res) =>  {    
    const notes = await NoteModel.find();    
    res.json(notes);
}

// Get one note.
notesController.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);    
    res.json(note)
};

// Create a note.
notesController.createNote = async (req, res) => {    
     const { title, content, date, author } = req.body;          
     const newNote = new Note({ title, content, date, author });
     await newNote.save()

    res.json({ message: 'Note Saved' })
};

// Update note
notesController.updateNote = async (req, res) => {    
    await Note.findOneAndUpdate({ _id: req.params.id }, req.body);    
    res.json({ message: 'Note Updated' })
};

// Delete note
notesController.deleteNote = async (req, res) => {
    await Note.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'Note Deleted' })
};

module.exports = notesController;