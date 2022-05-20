const express = require("express");
const router = express.Router();
const {getStudents} = require("../controller/student");

// Get All students data
router.get("/", getStudents);

// Get a student data
// router.get("/students/:id", getStudentById);

// // post(Create) a student data
// router.post("/students", createStudent);


// // update a student data
// router.put("/students/:id", updateStudent);


// // delete a student data
// router.delete("/students/:id", deleteStudent);

module.exports = router;