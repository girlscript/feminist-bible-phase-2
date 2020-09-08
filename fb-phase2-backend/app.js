const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const userRoutes = require("./routes/user");

//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

//config
app.set("view engine", "ejs"); //to not include .js extension in paths again and again

//routes middleware
app.use("/", userRoutes);

//Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
