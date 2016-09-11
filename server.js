"use strict";

var http = require("http"),
	express = require("express");

const app = express();
app.set("view engine", "jade");

app.use((request, response, next) => {
	console.log("In middleware 1");
	//response.write("HEADER");
	next();
	console.log("Out middleware 1");
});

app.use(express.static("./public"));


app.use((request, response, next) => {
	console.log("--In middleware 2");
	next();
	console.log("---Out middleware 2");
});

app.get("/", (request, response) => {
	response.end("Hello, World!");
	console.log("In Handler");
});

app.get("/home", (request, response) => {
	response.render("index", {title: "TITLE!"});
});

const server = new http.Server(app);

const port = 3000;
server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
