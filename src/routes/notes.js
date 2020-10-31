// this file will be in charge of control users notes.

// Adding Router function.
const { Router } = require('express');
const router = Router();

//  Get functions from notes.controllers.js to be used here.
const { getNotes, createNote, getNote, updateNote, deleteNote } = require('./../controllers/notes.controllers');

// when we use / in here, we get all string before from it is using.
// for example, in this case, we are requiring notes.js from app.js
// in line [app.use('/api/notes', require('./routes/notes'));], so
// when we use /, actually we are getting ['/api/notes/{this string']
router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .delete(deleteNote)
    .put(updateNote) // update whole object
    //.patch() // update only one property of the object;

module.exports = router;