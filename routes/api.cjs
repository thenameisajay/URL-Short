const express = require('express');
const shortid = require('shortid'); // dependency for generating short id // deprecated in v3.0.0
const bodyParser = require("body-parser");
const router = express.Router();
const validator = require('../helper/validator.cjs');
const Url = require('../model/url.cjs');
const mongoose   = require('mongoose');


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

/* TODO: now shorten the url and save it in the database with the original url.
before that we need to check if the url is already present in the database or not.
if present then return the short url from the database. */

    // Generate short id
    const shortUrl = shortid.generate(url);
    console.log(shortUrl);

    // TODO: Find if there is already a original url present in the database or not , if present then return the short url from the database.


 
    


});


module.exports = router;