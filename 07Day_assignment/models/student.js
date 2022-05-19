const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentCollege: {
    type: String,
    required: true,
  },
  studentAge: {
    type: String,
    required: true,
  },
  studentRollNumber: Number,
  required: true
});

const Student = mongoose.model("StudentSchema", StudentSchema);

module.exports = Student