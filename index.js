const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connect to db
const dbuser = "root";
const dbpassword = "example";
const dbport = 27017;
const dbhost = "mongo";

const dbURI = `mongodb://${dbuser}:${dbpassword}@${dbhost}:${dbport}/myapp?authSource=admin`;

mongoose.connect(dbURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Could not connect to MongoDB", err));

app.get("/", (req, res) => {
    res.send("<h1>Hello from Node.js 🚀</h1>");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});