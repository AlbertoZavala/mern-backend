// this file will be in charge of control users routes.

// Adding Router function.
const { Router } = require('express');
const router = Router();

//  Get functions from notes.controllers.js to be used here.
const { getUsers, getUser, createUser, updateUser, deleteUser,  } = require('./../controllers/users.controllers');

// when we use / in here, we get all string before from it is using.
// for example, in this case, we are requiring users.js from app.js
// in line [app.use('/api/users', require('./routes/users'));], so
// when we use /, actually we are getting ['/api/users/{this string']
router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .get(getUser)
    .delete(deleteUser)
    .put(updateUser) // update whole object
    //.patch() // update only one property of the object;

module.exports = router;