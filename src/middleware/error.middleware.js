const logger = require('../utils/logger');

const errorMiddleware = (err, req, res, next) => {
  logger.error(`[Error]: ${err.message}\n${err.stack}`);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
};

module.exports = errorMiddleware;
