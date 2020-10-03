const express = require('express');
<<<<<<< HEAD
const mongoose = require('mongoose');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
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
=======

const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
const orgRouter = require('./routes/orgRoutes');
const adminRouter = require('./routes/adminRoutes');
const userRouter=require('./routes/userRoutes');

const app = express();
app.use(express.json());

// routes
app.use('/api/auth', authRouter);
app.use('/api/story', storyRouter);
app.use('/api/org', orgRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa

module.exports = app;
