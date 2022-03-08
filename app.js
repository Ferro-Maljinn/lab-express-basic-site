const { res } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/gallery", (req, res, next) => {
  res.sendFile(__dirname + "/views/gallery.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
