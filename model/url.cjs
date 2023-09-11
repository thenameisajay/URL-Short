const mongoose = require("mongoose");

// Make a database model

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortUrl: String,
  date: { type: String, default: Date.now },
});

// Create a model from the schema

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
