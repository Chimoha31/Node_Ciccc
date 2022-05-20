// function for routes >> student.js

const Student = require("../models/student");

// Get All students data
const getStudents = (req, res) => {
  Student.find()
    .then((data) => {
      return res.status(200).json({
        messgae: "Successfully found students data",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error",
        err: err,
      });
    });
};

// Get a student data
const getStudentById = (req, res) => {
  const id = req.params.id;
  Student.findById(id)
    .then((data) => {
      return res.status(200).json({
        message: "Successfully get a student data",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error to get a student data",
      });
    });
};

// // post(Create) a student data
const createStudent = async (req, res) => {
  const newStudent = {
    studentName: req.body.studentName,
    studentCollege: req.body.studentCollege,
    studentAge: req.body.studentAge,
    studentRollNumber: req.body.studentRollNumber,
  };
  const student = new Student(newStudent);

  try {
    const data = student.save();

    return res.status(201).json({
      message: "Successfully created a student data !",
      data: data,
    });
  } catch (err) {
    return res.status(500).json({
      message: "There was an error",
      err: err,
    });
  }
};

// // update a student data
const updateStudent = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Student.findOneAndUpdate({ _id: id }, body, {
    returnOriginal: false,
  })
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully updated the student data !",
        data: data,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error to update..",
        err: err,
      });
    });
};

// // delete a student data
const deleteStudent = (req, res) => {
  const id = req.params.id;
  Student.findOneAndDelete({ _id: id })
    .then((data) => {
      return res.status(200).json({
        message: "Succesfully deleted the student data",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        message: "There was an error to delete...",
        err: err,
      });
    });
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
