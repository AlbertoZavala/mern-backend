// This file will be on charge of database connection

const mongoose = require('mongoose');

// Connection URI to mernbackend.
// If not exist, it will be createtd.
const URI = process.env.MONGODB_URI ? 
    process.env.MONGODB_URI : 
    'mongodb://localhost/testadatabase';

// With this, we can connecto to an instance of mongodb
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true     
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongoose database is connected');
});