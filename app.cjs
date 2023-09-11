require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB.cjs');
const cors = require('cors');
const  shortener = require('./routes/api.cjs');
const bodyParser = require('body-parser');

// Initialising Middleware
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
cors();



// Connect to database
connectDB();

// Initialising the routes
app.use('/api/short', shortener);
app.use


app.get('/', (req, res) => {
    res.send('Hello World');
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});