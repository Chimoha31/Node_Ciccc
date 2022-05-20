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
// const getStudentById = () => {};

// // post(Create) a student data
// const createStudent = () => {};

// // update a student data
// const updateStudent = () => {};

// // delete a student data
// const deleteStudent = () => {};


module.exports = {
  getStudents,
}