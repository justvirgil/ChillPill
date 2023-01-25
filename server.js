// to check if we are running in the production environment or not
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// importing index.js
// indexRouter makes a reference in this case the index.js in the routes folder since we want to make it run
// should make app.run() property to use this indexRouter
const indexRouter = require('./routes/index');

// using ejs as a view engine
app.set('view engine', 'ejs'); 
// setting where our views are coming from
// setting our current directory name __dirname and append to /views
app.set('views' + __dirname + '/views');
// hookup our layout
// idea behind a layout is to put every single file inside this layout file
// so that we dont have to duplicate beginning/end html such as header footer
// we make views folder that contains layouts folder > layout.ejs
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
// just a folder in the app called public
app.use(express.static('public'));

// import mongoose after installing the driver via 'npm i mongoose' in terminal
const mongoose = require('mongoose');
// setting up connection for our database , we should be dependent on our environment
// when you're developing you want to connect to local db server but when you upload the app you want to connect to a server thats on a web somewhere.
// we also added mongoose.set("strictQuery", false); since DeprecationWarning will occur 
mongoose.set("strictQuery", false); 
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
//  we have to log to see if we are connected to the database
const db = mongoose.connection;
// prints out error
db.on('error', error => console.error());
// prints if it runs
db.once('open', () => console.log('Connected to Mongoose'));


// tells our app to use this indexRouter above
// ('/') means the very root of our application
// error occurs (crash) when the router/controllers is not exported
app.use('/', indexRouter);

//tell our app to listen
app.listen(process.env.PORT || 3000);

