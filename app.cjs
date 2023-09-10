require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB.cjs');
const validator = require('./helper/validator.cjs');


const app = express();


// Connect to database
connectDB();


app.get('/', (req, res) => {
    res.send('Hello World Ajay!');

    const url = "https://www.ajay.com";
  
    console.log( validator(url));
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});