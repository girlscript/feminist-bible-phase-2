const express = require('express');
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
const orgRouter = require('./routes/orgRoutes');
const swaggerDefinition = require('./config/swaggerDefinition');

const app = express();
app.use(express.json());
const swaggerSpec = swaggerJSDoc({
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.js', './database/models/*.js'],
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
app.use('/api/story', storyRouter);
app.use('/api/organizations',orgRouter);

module.exports = app;
