// This file will be implemented on routes and will be in charge of 
// control all functions related with notes.

// We declare the notesController object.
const notesController = {};

// Get all notes.
notesController.getNotes = (req, res) => res.json({ message: [] });

// Get one note.
notesController.getNote = (req, res) => res.json({ title: 'First note', content: 'I have to go to the supermarket' });

// Create a note.
notesController.createNote = (req, res) => res.json({ message: 'Note Saved' });

// Update note
notesController.updateNote = (req, res) => res.json({ message: 'Note Updated' });

// Delete note
notesController.deleteNote = (req, res) => res.json({ message: 'Note Deleted' });

module.exports = notesController;