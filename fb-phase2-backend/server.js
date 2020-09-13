const http = require('http');
const app = require('./app');
const db = require('./database')();

const port = process.env.PORT || 7000;

db;
// this is useful when creating a https server 
http
  .createServer(app)
  .listen(port, () => console.log('HTTP server listening on ' + port));
