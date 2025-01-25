const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const questionRouter = require('./routes/questionRoutes');
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalHandleError = require('./controllers/errorController');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
const limiter = rateLimit({
  max: 700,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP. Please try again in an hour!',
});
app.use('/api', limiter);
app.use(mongoSanitize());
app.use(xss());
app.use(express.json());

// Routes
app.use('/api/v1/questions', questionRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} in this server`, 404));
});

app.use(globalHandleError);

module.exports = app;
