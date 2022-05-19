const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Mongodb");
});

app.listen(PORT, () => {
  console.log ("Teddy is running 🐶 !");
})
