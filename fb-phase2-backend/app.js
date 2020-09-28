const express = require('express');

const authRouter = require('./routes/authRoutes');
const storyRouter = require('./routes/storyRoutes');
const orgRouter = require('./routes/orgRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();
app.use(express.json());

// routes
app.use('/api/auth', authRouter);
app.use('/api/story', storyRouter);
app.use('/api/org', orgRouter);
app.use('/api/admin', adminRouter);

module.exports = app;
