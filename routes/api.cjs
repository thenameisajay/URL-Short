const express = require('express');
const shortid = require('shortid'); // dependency for generating short id // deprecated in v3.0.0
const bodyParser = require("body-parser");
const router = express.Router();
const validator = require('../helper/validator.cjs');


// Middleware
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', async (req, res) => {
    const url = req.body.url;
    console.log(url);

    // Validate the URL
    if (!validator(url)) {
        console.log('Invalid URL');
        res.send('Invalid URL');
    } else {
        console.log('Valid URL');
    }



});


module.exports = router;