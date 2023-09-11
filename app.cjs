require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB.cjs');

const  shortener = require('./routes/api.cjs');
const bodyParser = require('body-parser');


const app = express();



// Connect to database
connectDB();

// Initialising the routes
app.use('/api/short', shortener);


app.get('/', (req, res) => {
    res.send('Hello World');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});