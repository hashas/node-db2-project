// import the instance of express defined in server.js
const server = require("./api/server.js")

const PORT = process.env.PORT || 5000

// call the listen method on server
server.listen(PORT, () => {
	console.log(`API running on port ${PORT}`)
})