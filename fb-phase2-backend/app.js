// const express = require("express");
const mongoose = require("mongoose");

// const authRouter = require("./routes/authRoutes");
const storyRouter = require("./routes/storyRoutes")

// const app = express();

app.use(express.json())
 
// app.use("/api/auth", authRouter);
app.use("/api/story", storyRouter)

// module.exports = app;
