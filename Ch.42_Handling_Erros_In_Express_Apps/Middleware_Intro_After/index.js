const express = require("express");
const { status } = require("express/lib/response");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

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

  throw new AppError("Password required", 401);
  // res.status(401);
  // throw new Error("Password required!");
};

app.get("/", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("Home page");
});

app.get("/error", (req, res) => {
  chicken.fly();
});

app.get("/dogs", (req, res) => {
  console.log(`Request date: ${req.requestTime}`);
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("My secrete!");
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not an Admin!", 403);
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

// app.use((err, req, res, next) => {
//   console.log("************************************");
//   console.log("***************ERROR****************");
//   console.log("************************************");
//   next(err);
//   console.log(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong" } = err;
  res.status(status).send(message);
  next(err);
});

app.listen(3000, () => {
  console.log("App is running on localhost 3000");
});
