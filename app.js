//package imports
const express = require("express");

const app = express();

// //use allows to add us new middleware function
// //route added with app.use - handling routes
// app.use((req, res, next) => {
//   console.log("First middleware");
//   // sending response
//   res.send("<h1>Home</h1>");
//   next();
// });
// app.use((req, res, next) => {
//   console.log("Another middleware");
//   // sending response
//   // res.send("<h1>came to user route</h1>");
// });
app.use("/users", (req, res, next) => {
  console.log("/ users middleware");
  res.send("<p>middleware handles /users");
});

//home route middleware written later as it will now allow to route on another route then,
app.use("/", (eq, res, next) => {
  console.log("/ middleware");
  res.send("<h1>home route middleware</h1>");
  // next();
});

app.listen(3000); //shortcut for server removing above 2 lines
