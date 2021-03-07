const http = require('http');
const app = require('./app');

const port = process.env.PORT || 8080;

// this is useful when creating a https server
http
  .createServer(app)
  .listen(port, () => console.log('HTTP server listening on ' + port));
