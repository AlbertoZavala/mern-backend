// This file will be implemented on routes and will be in charge of 
// control all functions related with users.

// We declare the usersController object.
const usersController = {};

const User = require('./../models/User');
const { findById } = require('./../models/User');
const userModel = require('./../models/User');

// Get all users.
usersController.getUsers = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
};

// Get one user.
usersController.getUser = async (req, res) => {
    const user = await userModel.findOne({ _id: req.params.id });
    res.json(user);
};

// Create a user.
usersController.createUser = async (req, res) => {    
    const { username } = req.body;
    const user = new userModel({ username });
    await user.save();    
    res.json({ message: 'User Saved' })
};

// Update user
usersController.updateUser = async (req, res) => {    
    await userModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    res.json({ message: 'User Updated' })
};

// Delete user
usersController.deleteUser = async (req, res) => {
    await userModel.findOneAndDelete({ _id: req.params.id });
    res.json({ message: 'User Deleted' })
};

module.exports = usersController;

