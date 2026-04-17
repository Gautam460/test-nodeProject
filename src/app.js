const express = require('express');
const morgan = require('morgan');
const routes = require('./routes');
const errorMiddleware = require('./middleware/error.middleware');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup morgan to stream HTTP request logs to Winston
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JS API!' });
});

app.use('/api', routes);
app.use(errorMiddleware);

module.exports = app;
