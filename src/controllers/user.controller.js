const asyncHandler = require("../utils/asyncHandler.util")
const User = require("../models/user.model")
const { get } = require("mongoose")

const createUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    await User.create({
        username,
        password,
    })

    // Create a new user
    res.status(201).json({
        message: "User created",
    })
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()

    res.status(200).json({
        users,
    })
})

module.exports = {
    createUser,
    getAllUsers,
}
