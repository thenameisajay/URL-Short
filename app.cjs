require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const buildPath = path.join(__dirname, 'build')
// Importing routes
const shortener = require("./routes/api.cjs");
const connectDB = require("./config/connectDB.cjs");

// Importing the URL model
const URL = require("./model/url.cjs");

// Initialising Middleware
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(buildPath)) 

// Connect to database
connectDB();

// Initialising the routes
app.use("/api/short", shortener);

// TODO: Add a route to redirect to the original URL


// //Serve static files from the React frontend app
app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
})

// Define a catch-all route to serve the React app's HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'))
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
