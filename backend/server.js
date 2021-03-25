const http = require('http');
const app = require('./app');
const mongodbConnect = require("./database/index")

const port = process.env.PORT || 8080;

(async () => {
  
  // Connect to DB
  // const db = await mongodbConnect();

  // this is useful when creating a https server
  http
    .createServer(app)
    .listen(port, () => console.log('HTTP server listening on ' + port));

})()
