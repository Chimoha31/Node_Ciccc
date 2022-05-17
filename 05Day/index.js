const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = [
    {
      name: "Teddy",
      age: "1",
      gender: "boy 👶🏻",
    },
    {
      name: "Hana",
      age: "11",
      gender: "girl 👧🏻",
    },
    {
      name: "Moko",
      age: "17",
      gender: "girl 👧🏻",
    },
  ];
  res.render("index", { data: data });
});

app.listen(PORT, () => {
  console.log("Server is running !");
});
