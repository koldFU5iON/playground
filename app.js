'use strict'

// making sure express is recognised in the app
const express = require('express');
const path = require('path');
// making app an easy reference through-out the script
const app = express();

// defining routes
const report = require('./routes/report')

// defines the express engine what renderer to use
app.set('view engine', 'pug');


app.get('/', ( req, res ) => {
    res.render('main');
});

app.use('/report', report);

app.get('/hello', ( req, res ) => {
    res.send('<h1>Hello, JavaScript Developer</h1>');
});

// starting the server for express to run
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
//   });

  
//   // error handler
//   app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
//   });