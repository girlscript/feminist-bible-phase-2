const express = require('express');
const rateLimit = require('express-rate-limit');
const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
const orgRouter = require('./routes/orgRoutes');
const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
app.use(express.json());

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

module.exports = app;
