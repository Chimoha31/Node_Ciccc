const express = require("express");
const app = express();
const PORT = 8000;


app.get("/", (req, res) => {
  return res.send("Test");
});

app.listen(PORT, () => {
  console.log(`Teddy is Running at port ${PORT}`);
});