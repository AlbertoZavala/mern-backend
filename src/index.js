// This file is on charge of start the server.

// Dotenv should be on top in order to import all environment variables before 
// the application start.
require('dotenv').config();

const app = require('./app');
require('./database');

// Function in charge to start the appliction.
async function main(){

    // We set the port were will be listening the server.
    await app.listen(4000);
     console.log('Server running on port 4000')
}

main();