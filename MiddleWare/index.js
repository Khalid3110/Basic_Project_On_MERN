const express = require("express");
const app = express();

//Middleware

// app.use((req, res, next) => {
//   console.log("Hi, I am middleware");
//   //   res.send("middleware finished");
//   next();
// });

// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toLocaleString();
//   //   console.log(req);
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

// Middleware as function
const checkToken = (req, res, next) => {
  let { token } = req.query;
  console.log(req);
  if (token === "giveaccess") {
    next();
  }
  res.send("Access Denied");
};

app.get("/api", checkToken, (req, res) => {
  res.send("datas");
});

app.get("/", (req, res) => {
  res.send("Hello");
});

//No match middleware
app.use((req, res) => {
  console.log("Page not found middleware");
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log("Server running");
});
