const path = require("path");
const express = require("express");
const requestPromise = require("request-promise");
const app = express();

const htmlPath = path.join(__dirname, "index.html");

app.get("/", (req, res) => {
	res.sendFile(htmlPath);
});

console.log("dirname = ", __dirname);
console.log("path join = ", path.join(__dirname, "index.html"));

// app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/cards", async (req, res) => {
	var settings = {
		async: true,
		crossDomain: true,
		url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	};
	const apiResponse = await request(settings).catch(error =>
		console.log(error)
	);

	const apiResponseObj = JSON.parse(apiResponse);

	res.status(200).send({
		shuffled: apiResponseObj.shuffled,
		success: apiResponseObj.success,
		deck_id: apiResponseObj.deck_id,
		remaining: apiResponseObj.remaining
	});
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
