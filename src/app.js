const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(require("./routes/index"));

module.exports = app;

/*

	• Mkdir projectName
	• Cd projectName
	• Npm init
	• Npm I express
	• Mkdir src
		○ Touch index.js
		○ Touch app.js
	• Mkdir src/routes
	• Touch src/routes/index.js
	• Add code
	• Initialize docker desktop

		○ Link to github repo

	• Touch Dockerfile
		○ Fill it
		
	• Touch .dockerignore
		○ Fill it
	• docker buildx build -t  node-restapi .
		○ I have to download an image from dockerwindowsApp previous to run this
		
	• docker images
	• docker run -it -p 4404:3303 noderestapi
	• docker ps  //para ver los procesos corriendo
	• Docker stop noderestapi

FaztCode
https://www.youtube.com/watch?v=iLlmm0L-VpQ  

*/
