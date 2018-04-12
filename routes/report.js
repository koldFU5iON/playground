'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
   res.render('report/view')
});

module.exports = router;