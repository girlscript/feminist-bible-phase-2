const fs = require('fs');
const path = require('path');

// check if environment is set as development
if (process.env.NODE_ENV === "development") {
    // check if .env file exists
    if (!fs.existsSync(path.resolve('.env'))) {
        throw new TypeError('.env File Not Found. Forgot to create one?');
    }

    // load the .env file (for development)
    require('dotenv').config({ path: path.resolve(`.env`) });
} 

// default the environment to production
else {
    // check if .env.production file exists
    if (!fs.existsSync(path.resolve('.env.production'))) {
        throw new TypeError('.env File Not Found. Forgot to create one?');
    }

    // load the .env.production file (for production)
    require('dotenv').config({ path: path.resolve(`.env.production`) });
}