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
//--------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Hello Mongodb");
});

// CRUD method and router ------------------------------
app.use("/api/v1/students", StudentRoutes)
// -----------------------------------------------------

// Fetch(get) all students list ---------------------------
// find()
// app.get("/api/v1/students", (req, res) => {
//   Student.find()
//     .then((data) => {
//       return res.status(200).json({
//         messgae: "Successfully found students data",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       return res.status(500).json({
//         message: "There was an error",
//         err: err,
//       });
//     });
// });

// // Fetch(get) a (one) student data------------------------
// // findById()
// app.get("/api/v1/students/:id", (req, res) => {
//   const id = req.params.id;
//   Student.findById(id)
//     .then((data) => {
//       return res.status(200).json({
//         message: "Successfully get a student data",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       return res.status(500).json({
//         message: "There was an error to get a student data",
//       });
//     });
// });

// // Create student data for mongodb-------------------------
// // save()
// app.post("/api/v1/students", async (req, res) => {
//   const newStudent = {
//     studentName: req.body.studentName,
//     studentCollege: req.body.studentCollege,
//     studentAge: req.body.studentAge,
//     studentRollNumber: req.body.studentRollNumber,
//   };
//   const student = new Student(newStudent);

//   try {
//     const data = student.save();

//     return res.status(201).json({
//       message: "Successfully created a student data !",
//       data: data,
//     });
//   } catch (err) {
//     return res.status(500).json({
//       message: "There was an error",
//       err: err,
//     });
//   }
// });

// // Edit student data-----------------------------------
// // findOneAndUpdate()
// app.put("/api/v1/students/:id", (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   Student.findOneAndUpdate({ _id: id }, body, {
//     returnOriginal: false,
//   })
//     .then((data) => {
//       return res.status(200).json({
//         message: "Succesfully updated the student data !",
//         data: data,
//       });
//     })
//     .catch((err) => {
//       return res.status(500).json({
//         message: "There was an error to update..",
//         err: err,
//       });
//     });
// });

// // Delete Student data ------------------------------
// // findOneAndDelete()
// app.delete("/api/v1/students/:id", (req, res) => {
//   const id = req.params.id;
//   Student.findOneAndDelete({_id:id}).then((data) => {
//     return res.status(200).json({
//       message: "Succesfully deleted the student data",
//     })
//   }).catch((err) => {
//     return res.status(500).json({
//       message: "There was an error to delete...",
//       err: err,
//     })
//   })
// })

//-------------------------------------------------------
app.listen(PORT, () => {
  console.log("Teddy is running 🐶 !");
});
