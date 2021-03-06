const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
const orgRouter = require('./routes/orgRoutes');
const adminRouter = require('./routes/adminRoutes');
const userRouter = require('./routes/userRoutes');
const projectRouter = require('./routes/projectRoutes');
const forumRouter = require('./routes/forumRoutes');
const cookieParser = require('cookie-parser');
const { validateCookie } = require('./controllers/authController');

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

// parse cookie
app.use(cookieParser())

// routes
app.use('/api/auth', authRouter);
app.use('/api/story', validateCookie, storyRouter);
app.use('/api/org', validateCookie, orgRouter);
app.use('/api/admin', validateCookie, adminRouter);
app.use('/api/user', validateCookie, userRouter);
app.use('/api/project', validateCookie, projectRouter);
app.use('/api/forum', validateCookie, forumRouter);

module.exports = app;
