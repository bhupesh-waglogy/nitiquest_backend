const userRouter = require("express").Router()

const { createUser, getAllUsers } = require("../controllers/user.controller")

// Create a new user
userRouter.route("/signup").post(createUser)

// get all users
userRouter.route("/").get(getAllUsers)

module.exports = userRouter
