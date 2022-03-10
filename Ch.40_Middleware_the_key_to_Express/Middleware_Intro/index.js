const express = require("express");
const { status } = require("express/lib/response");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs!");
  next();
});

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    return next();
  }
  res.send("Sorry you need a password!!");
};

// app.use((req, res, next) => {
//   console.log("First middleware!");
//   return next();
//   console.log("First middleware after calling next()");
// });

// app.use((req, res, next) => {
//   console.log("Second middleware!");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("Third middleware!");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("Home page");
});

app.get("/dogs", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("My secrete!");
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log("App is running on localhost 3000");
});
