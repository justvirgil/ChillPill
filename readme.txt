To use NodeJS MongoDB. https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5
........................................................................
Changes I made due to errors / deprecation:

require('dotenv').load() to require('dotenv').config() => line 3 server.js

MongooseServerSelectionError: connect ECONNREFUSED  im getting this error so i did
DATABASE_URL=mongodb://127.0.0.1/ChillFlix instead of DATABASE_URL=mongodb://localhost/ChillFlix => .env file
........................................................................
pre requisite programs:
1>nodejs
2>mongodb community server (complete)
3>mongodb shell

first change the directory on the terminal
choose the file path where you want to store the NodeJS MongoDB
command in terminal: 

installation cmd-
>cd NodeJS_MongoDB (to change directory only if directory in terminal is not on the folder we are in which is NodeJS_MongoDB)
>npm install mongodb
>npm i express ejs express-ejs-layouts
>npm i --save-dev nodemon
>npm i mongoose
>npm i dotenve
>mongosh 


running the program
>cd NodeJS_MongoDB (if directory is not correct in terminal)
>npm run devStart (the command we made in package.json)
inside package.json: 
    "start": "node server.js", // to start program normally without nodemon
    "devStart": "nodemon server.js" // to start server and run nodemon that will automatically refresh the server when we make change


to stop the command.
>use "ctrl+c" in terminal cmd.



........................................................
MVC = Model , View , Controller
Model handles the data
View handles the presentation
Controller tells model and view what to do
........................................................
REST = REpresentation, State, Transfer 
means that a server response to create,read,update,
delete request in a standard way

GET - gets a list of the resource & Acts on the entire resource
POST - used to create a new resource & acts on the entire resource
UPDATE - updates the resource with the given ID & Acts on a single resource
DELETE - Deletes the resource with the given ID & Acts on a single resource
