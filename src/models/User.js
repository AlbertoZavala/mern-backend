// Here we going to define the model of the object User.

// As we are using mongodb, we will use mongoose to create this models
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trime: true,
        unique: true
    }

}, {
    // Each time we create a new data, it will be created
    // creation date and modification date
    timestamps: true 
});

// It will be create a collection called Users
module.exports = model('User', userSchema);