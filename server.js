"use strict";

var http = require("http"),
	express = require("express"),
	socketIo = require("socket.io");


const app = express();
app.set("view engine", "jade");

app.use(express.static("./public"));

app.get("/", (request, response) => {
	response.end("Hello, World!");
});

app.get("/home", (request, response) => {
	response.render("index", {title: "TITLE!"});
});

const server = new http.Server(app);
const io = socketIo(server);

io.on("connection", socket => {
	console.log("Client connected");
});

const port = 3000;
server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
