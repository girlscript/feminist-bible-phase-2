require('./dotenv.js');
const { name, version } = require('../package.json');

const port = process.env.PORT || 7000;

const swaggerDefinition = {
  info: {
    title: `${name} API Docs`,
    version,
    description: 'Interactive API docs',
  },
  host: `localhost:${port}`,
  basePath: '/',
};

module.exports = swaggerDefinition;
