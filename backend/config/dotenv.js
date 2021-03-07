// since, env vars are needed in many places, having this
// file would prevent dups
const fs = require('fs');
const path = require('path');

// check if .env exists
// if (!fs.existsSync(path.resolve('.env'))) {
//   throw new TypeError('.env File Not Found. Forgot to create one?');
// }

// require('dotenv').config({ path: path.resolve('.env') });
