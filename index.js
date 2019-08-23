const path = require("path");
const express = require("express");
const app = express();

const htmlPath = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
	res.sendFile(htmlPath);
});

console.log("dirname = ", __dirname);

console.log("path join = ", path.join(__dirname, "index.html"));

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
