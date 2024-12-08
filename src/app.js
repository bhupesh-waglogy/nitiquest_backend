// packages importation
const express = require("express")

// modules importation

// app initialization
const app = express()

// middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes

app.use("/api", require("./routes/app.routes"))

module.exports = app
