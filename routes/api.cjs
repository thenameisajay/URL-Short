const express = require("express");
const shortid = require("shortid"); // dependency for generating short id // deprecated in v3.0.0
const bodyParser = require("body-parser");
const router = express.Router();
const validator = require("../helper/validator.cjs");
const URL = require("../model/url.cjs");

// Middleware
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/", async (req, res) => {
  const url = req.body.url;
  const formatted_url = url
    .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
    .split("/")[0];
  console.log(formatted_url);

  // Validate the URL
  if (!validator(url)) {
    console.log("Invalid URL");
    res.send("invalid");
  } else {
    console.log("Valid URL");
  }

  // Check if the URL already exists in the database , if it does then return the short URL or else create a new short URL and return it.

  URL.findOne({ longUrl: formatted_url })
    .then((url) => {
      if (url) {
        console.log("URL already exists in the database");
        res.send(url.shortUrl);
      } else {
        console.log("URL does not exist in the database");
        // Generate short id
        const shortUrl = shortid.generate(url);
        console.log(shortUrl);
        const newUrl = new URL({
          longUrl: formatted_url,
          shortUrl: shortUrl.toLowerCase(),
        });
        newUrl
          .save()
          .then((url) => {
            console.log("URL saved in the database");
            res.send(url.shortUrl);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
