const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.use('/login',(req, res, next) => {
    console.log('hello world');
    res.send('<h1>hello world</h1>')
})

router.post('/adduser',adminController.postUsers);

module.exports = router;