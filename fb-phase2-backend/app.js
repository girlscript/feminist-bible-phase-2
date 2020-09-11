const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");

const app = express();



app.use("/api/auth", authRouter);

module.exports = app;
