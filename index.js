require("dotenv").config()
const app = require("./src/app")
const connect = require("./src/config/db")

connect().then(() => {
    // Start the server
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })

    // Error handling
    app.on("error", (error) => {
        console.error("Error starting the server:", error)
        process.exit(1) // 1 means process ended with an error
    })
})
