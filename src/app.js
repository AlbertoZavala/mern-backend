// This file is where we keep the code of server code.
// Here is where we define the server to be exported and
// initialized by index.js file.

const express = require('express');
const cors = require('cors');

// Initialize server and set into app constant
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares. This will be executed before get to the routes.
app.use(cors());
app.use(express.json()); // Now, our server will understand json format.

// Routes. Here, will have to define, the routes that the frontend app
// may use.
app.get('/api/users', (req, res) => res.send('Users Routes'));
app.get('/api/notes', (req, res) => res.send('Notes Routes'));


// Export the server app
module.exports = app;