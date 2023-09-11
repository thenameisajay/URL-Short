require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

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

// Connect to database
connectDB();

// Initialising the routes
app.use("/api/short", shortener);

// TODO: Add a route to redirect to the original URL
app.get("/:shortUrl", (req, res) => {
  const shortURL = req.params.shortUrl;
  console.log(shortURL.toLowerCase());
  URL.findOne({ shortUrl: shortURL.toLowerCase() })
    .then((url) => {
      if (url) {
        console.log("URL found in the database");
        const urlRedirect = url.longUrl;
        console.log(urlRedirect);
        const urlRedirectFormatted = "https://" + urlRedirect;
        console.log(urlRedirectFormatted);
        res.redirect(urlRedirectFormatted);
        //TODO: Redirect to the original URL
      } else {
        console.log("URL not found in the database");
        res.send("URL not found in the database");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
