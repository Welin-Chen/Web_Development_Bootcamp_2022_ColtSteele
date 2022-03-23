const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/greet", (req, res) => {
  const { name = "no-name" } = req.cookies;
  res.send(`hello~ ${name}`);
  //   res.send("hello world", req.cookies);
});

app.get("/setname", (req, res) => {
  res.cookie("name", "welin");
  res.cookie("animal", "dog");
  res.send("ok, send you a cookie");
});

app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("Ok signed your cookie!");
});

app.get("/verifyfruit", (req, res) => {
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("Serving");
});
