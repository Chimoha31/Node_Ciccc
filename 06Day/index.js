const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

app.use(express.json());

const mongoURL = `mongodb+srv://chiho:chiho@ciccc-may08.fhcts.mongodb.net/?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
  res.send("Hello Mongodb");
});

app.listen(PORT, () => {
  console.log(`Teddy is running at PORT ${PORT} 🐶`);
});
