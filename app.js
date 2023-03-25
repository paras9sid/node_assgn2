//package imports
const express = require("express");

const app = express();

//use allows to add us new middleware function
//route added with app.use - handling routes
app.use("/", (req, res, next) => {
  console.log("First middleware");
  // sending response
  res.send("<h1>Home</h1>");
  next();
});
app.use("/users", (req, res, next) => {
  console.log("Another middleware");
  // sending response
  // res.send("<h1>came to user route</h1>");
});

app.listen(3000); //shortcut for server removing above 2 lines
