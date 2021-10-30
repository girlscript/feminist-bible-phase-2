const http = require('http');
const app = require('./app');
const db = require('./database/index');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const port = process.env.PORT || 8080;

(async () => {
  // Connect to DB
  await db();

  // this is useful when creating a https server
  http
    .createServer(app)
    .listen(port, () => console.log('HTTP server listening on ' + port));
})();
