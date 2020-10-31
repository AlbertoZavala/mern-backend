// This file is on charge of start the server.

const app = require('./app');

// Function in charge to start the appliction.
async function main(){

    // We set the port were will be listening the server.
    await app.listen(4000);
     console.log('Server running on port 4000')
}

main();