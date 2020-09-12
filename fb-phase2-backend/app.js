const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const authRouter = require('./routes/authRoutes');
const swaggerDefinition = require('./config/swaggerDefinition');

const app = express();
const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.js'],
});

// routes
app.use('/api/auth', authRouter);
app.use(
  '/docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec, {
    customCss: '.swagger-ui .topbar { display: none }',
  })
);

module.exports = app;
