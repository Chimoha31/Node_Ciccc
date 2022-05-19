const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const Student = require("./models/student");
require('dotenv').config();

app.use(express.json());

const mongoURL = process.env.MONGDB_URL;

// Connect to mongodb --------------------------------------
mongoose.connect(mongoURL, (err) => {
  if (err) {
    console.log(`There was an error connecting in database ${err}`);
  } else {
    console.log("Successfully connected to database");
  }
});
//-----------------------------------------------------------
app.get("/", (req, res) => {
  res.send("Hello Mongodb");
});

// fetch all students list-----------------------------
app.get("/api/v1/students", (req, res) => {
  Student.find()
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully feched to data",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There wa an error",
        err
      });
    });
});

// Fetch the student data by given Id----------------------
app.get("/api/v1/students/:id", (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully fetched to student list",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error",
        err
      });
    });
});

// Create entry in mongodb---------------------------
app.post("/api/v1/students", async (req, res) => {
  const newStudent = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const student = new Student(newStudent);

  try {
    const data = await student.save();
    return res.status(201).json({
        message: "Succesfully created a student!",
        data
    })
} catch(error) {
    return res.status(500).json({
        message: "There was an error fetching the data",
        error
    })
}

})

app.listen(PORT, () => {
  console.log(`Teddy is running at PORT ${PORT} 🐶`);
});
