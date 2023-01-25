// setting up a single route for our route
const express = require('express');
const router = express.Router();
// now we can create our route
// we use get action to get our route which is our root ('/')
// we pass a function for the actual request and respond which we are sending back
router.get('/', (req, res) =>{
    // sending basic response
    res.render('index');
    // nothing happends because we havent imported it in the server.js
});

//to export any information of this file we use
module.exports = router;