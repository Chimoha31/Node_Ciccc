const express = require("express");
const app = express();
// const PORT = 5000;

let animalStudents = [
  {
    animalRollNumber: "1",
    animalName: "Mr. Dog",
    animalCollege: "Doggy university",
    animalAge: "5",
  },
  {
    animalRollNumber: "2",
    animalName: "Mrs.Cat",
    animalCollege: "Kitty university",
    animalAge: "7",
  },
  {
    animalRollNumber: "3",
    animalName: "Pengine",
    animalCollege: "Penpen university",
    animalAge: "100",
  },
];

app.get("/", (req, res) => {
  return res.status(200).json(html);
});

app.get("/animals", (req, res) => {
  return res.status(200).json(animalStudents);
});

app.get("/animals/:animalRollNumber", (req, res) => {
  const reqId = req.params.animalRollNumber;
  const foundAnimal = animalStudents.find((student) => {
    if (student.animalRollNumber == reqId) {
      return student;
    }
  });
  return res.status(200).json(foundAnimal);
});

app.listen(PORT, () => {
  console.log("Teddy is Running");
});
