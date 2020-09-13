const express = require('express');
const mongoose = require("mongoose");
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const authRouter = require('./routes/authRoutes');
const storyRouter = require("./routes/storyRoutes")
const swaggerDefinition = require('./config/swaggerDefinition');

const app = express();
app.use(express.json())
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
app.use("/api/story", storyRouter)

module.exports = app;

