const express = require('express');
<<<<<<< HEAD
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

=======
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
>>>>>>> a2f9da64a18585a80174f250bfe3579de46c342f
const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
const orgRouter = require('./routes/orgRoutes');
const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Data sanitization against XSS
app.use(xss());

// Data sanitization against no-sql query injection
app.use(mongoSanitize());

app.use(express.json());

// using helmet to set secure headers
app.use(helmet());

// express rate limiter
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP address',
});

// using express rate limit to every request that hit "/"
app.use('/', limiter);

// routes
app.use('/api/auth', authRouter);
app.use('/api/story', storyRouter);
app.use('/api/org', orgRouter);
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
>>>>>>> fa14df529cd0c923bc30d417847380435ee56dfa

module.exports = app;
