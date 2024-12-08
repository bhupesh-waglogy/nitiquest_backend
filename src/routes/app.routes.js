// main app routes
const appRouter = require("express").Router()

// import user routes
const userRoutes = require("./user.routes")

appRouter.get("/", (req, res) => {
    res.json({
        message: "Welcome to the app",
    })
})

appRouter.use("/user", userRoutes)

module.exports = appRouter
