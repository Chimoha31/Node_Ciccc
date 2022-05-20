const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student");
const StudentRoutes = require("./routes/student");
const PORT = 5000;
require("dotenv").config();

app.use(express.json());
const mongoURL = process.env.MONGODB_URL;

// Connect mongodb ----------------------------------------
mongoose.connect(mongoURL, (err) => {
  if (err) {
    console.log(`There is an error for connecting ${err}`);
  } else {
    console.log("Succesfully connected to mongodb!");
  }
});
//-------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Hello Mongodb");
});

// CRUD method and router ------------------------------
app.use("/api/v1/students", StudentRoutes)
// -----------------------------------------------------

//------------------------------------------------------
app.listen(PORT, () => {
  console.log("Teddy is running 🐶 !");
});
