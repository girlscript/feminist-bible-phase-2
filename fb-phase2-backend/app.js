const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("dotenv").config();

const errorHandler = require('errorhandler');

//import routes
const userRoutes = require("./routes/user");

//passport Implementation
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


//db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"));

// for authentication routes
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));

//config
app.set("view engine", "ejs"); //to not include .js extension in paths again and again

//routes middleware
app.use("/", userRoutes);

//Port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
