// This file is where we keep the code of server code.
// Here is where we define the server to be exported and
// initialized by index.js file.

const express = require('express');

// Initialize server and set into app constant
const app = express();

// Export the server app
module.exports = app;