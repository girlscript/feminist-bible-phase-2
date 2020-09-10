const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const app = require('./app');
const DB = process.env.DATABASE_URI;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then((con) => {
        console.log('DB connection successful');
    });

const port = process.env.PORT || 7000;


app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});


// for testing. it would be better to keep db specific things inside database/
exports.database = mongoose
