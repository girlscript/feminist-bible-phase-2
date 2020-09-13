const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");



app.use("/api/auth", authRouter);

module.exports = app;
