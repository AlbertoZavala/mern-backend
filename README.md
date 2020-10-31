# mern-backend

## Requirements

#### Node:
First of all, we have to install Node.js from [here](https://nodejs.org/es/). Express is an environment for work with javascript on sidesirver.

#### MongoDB:
We need to install MongoDB from [here](https://www.mongodb.com/try/download/community)
We have to create a .env file on root of application (on MERN-BACKEDN) and here, we gonna set up the URI connection to mongo database.

    MONGODB_URI=mongodb://localhost/{databasename}

If you don't set this variable, it will be connect to testdatabase by default.

## Principal dependencies

#### Express
Description in here...

#### Mongoose        
Description in here... This is an ORM for use it with MongoDB

#### Cors
Description in here... This is for comunication between servers

#### Dotenv
Description in here... This is for set environments variables

    npm i express mongoose cors dotenv

## Others tools

#### Nodemon
Description in here... With this, server will restart every time that a change is detected on code.

    npm i nodemon -D

The -D word is for keep nodemon outside of dependencies on package.json. This will be added on devDependencies.

## Run server

    node src/index.js

Then we can go to the navigator and go to localhost:4000


