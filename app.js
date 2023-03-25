const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("middleware run");
  res.send("<h1>express running successfully on browser</h1>");
});

app.listen(6000);
