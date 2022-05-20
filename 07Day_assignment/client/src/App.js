import React, { useState } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [studentName, setStudentName] = useState("")
  const [studentCollege, setStudentCollege] = useState("")
  const [studentAge, setStudentAge] = useState("")
  const [studentRollNumber, setStudentRollNumber] = useState("")

   const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/v1/students', {
      studentName,
      studentCollege,
      studentAge,
      studentRollNumber
    }).then((response) => {
      alert(response.data.message);
    }).catch((error) => {
      alert(error.message);
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="form_container">
        <label>Student Name</label>
        <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        <label>Student College</label>
        <input type="text" value={studentCollege} onChange={(e) => setStudentCollege(e.target.value)} />
        <label>Student Age</label>
        <input type="number" value={studentAge} onChange={(e) => setStudentAge(e.target.value)} />
        <label>Student Roll#</label>
        <input type="number" value={studentRollNumber} onChange={(e) => setStudentRollNumber(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
