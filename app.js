'use strict'

// making sure express is recognised in the app
const express = require('express');
// making app an easy reference through-out the script
const app = express();
// defines the express engine what renderer to use
app.set('view engine', 'pug');

app.get('/', ( req, res ) => {
    res.render('index');
});

app.get('/hello', ( req, res ) => {
    res.send('<h1>Hello, JavaScript Developer</h1>');
});

// starting the server for express to run
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});