import React, { useState } from "react";
import "./App.css";
import axios from 'axios';

const App = () => {
  const [name, setName] = useState("")
  const [college, setCollege] = useState("")
  const [age, setAge] = useState("")
  const [rollNum, setRollNum] = useState("")

   const submitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/v1/students", {
      name,
      college,
      age,
      rollNum
    }).then((res) => {
      alert(res.message);
      console.log(res.message);
    }).catch((err) => {
      alert(err.message);
    })
   }

  return (
    <div>
      <form onSubmit={submitHandler} className="form_container">
        <label>Student Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Student College</label>
        <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
        <label>Student Age</label>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <label>Student Roll#</label>
        <input type="text" value={rollNum} onChange={(e) => setRollNum(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
