const express = require("express");
const router = express.Router();
const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/student");

// Get All students data
router.get("/", getStudents);

// Get a student data
router.get("/:id", getStudentById);

// // post(Create) a student data
router.post("/", createStudent);

// // update a student data
router.put("/:id", updateStudent);

// // delete a student data
router.delete("/:id", deleteStudent);

module.exports = router;
