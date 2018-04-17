'use strict'

// making sure express is recognised in the app
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// making app an easy reference through-out the script
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

// defining routes
const mainRoutes = require('./routes');
const reportRoutes = require('./routes/reports');

app.use(mainRoutes);
app.use('/report', reportRoutes);

// starting the server for express to run
app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});