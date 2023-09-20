const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.join(__dirname, "../dist")));
app.get("/", (req, res) => {
  const pathToHtmlFile = path.join(__dirname, "../dist/image-caption.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(9003, () => console.log("✅ Listening on port 9003"));
