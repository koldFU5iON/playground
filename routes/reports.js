'use strict'

const express = require('express');
const router = express.Router();

router.get('/', ( req, res ) => {
    res.render('./report/view');
 });
 
 router.get('/format', ( req, res ) => {
     res.render('./report/format');
 });
 
 router.post('/format', ( req, res, next ) => {
     res.render('./report/view', { quote: req.body.quote });
 });

 module.exports = router;