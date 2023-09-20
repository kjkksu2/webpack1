const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  const pathToHtmlFile = path.join(__dirname, "../dist/china.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9002, () => console.log("✅ Listening on port 9002"));
