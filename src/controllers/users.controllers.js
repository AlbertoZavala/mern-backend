// This file will be implemented on routes and will be in charge of 
// control all functions related with users.

// We declare the usersController object.
const usersController = {};

// Get all users.
usersController.getUsers = (req, res) => res.json({ message: [] });

// Get one user.
usersController.getUser = (req, res) => res.json({ id: 1, name: 'Alberto Zavala', email: 'alberto.zavala@domain.com' });

// Create a user.
usersController.createUser = (req, res) => res.json({ message: 'User Saved' });

// Update user
usersController.updateUser = (req, res) => res.json({ message: 'User Updated' });

// Delete user
usersController.deleteUser = (req, res) => res.json({ message: 'User Deleted' });

module.exports = usersController;

