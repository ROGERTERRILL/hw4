const express = require("express");
const app = express();
app.engine("html", require("ejs").renderFile);
app.use(express.static("public"));

//routes
app.get("/", function(req, res) {
  res.render("index.html");
});

app.get("/iloveyou", function(req, res) {
  res.render("iloveyou.html");
});

app.get("/shamoon", function(req, res) {
  res.render("shamoon.html");
});

app.get("/stuxnet", function(req, res) {
  res.render("stuxnet.html");
});

//server listener
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Express server is running...");
});
