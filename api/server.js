// this file defines the server before we export it to index.js

// import/require express
const express = require("express");
const helmet = require("helmet");

// import/require express router
const carsRouter = require("../cars-router.js");

// create an instance of express named "server" and export it below
const server = express();

// use .use() method to load middleware (built-in, third-party, custom, etc.)
server.use(helmet());
server.use(express.json());

server.use("/cars", carsRouter);

server.use((err,req,res,next) => {
	console.log(err)
	res.status(500).json({
		message: "something went wrong"
	})
})

module.exports = server;