const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const data = [
    {
      name: "Teddy",
      age: "1",
      gender: "boy πΆπ»",
    },
    {
      name: "Hana",
      age: "11",
      gender: "girl π§π»",
    },
    {
      name: "Moko",
      age: "17",
      gender: "girl π§π»",
    },
  ];
  res.render("index", { data: data });
});

app.listen(PORT, () => {
  console.log("Server is running !");
});
