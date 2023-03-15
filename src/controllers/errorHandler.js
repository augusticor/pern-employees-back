const { request, response } = require('express');
const logger = require('../utils/logger');
const { CustomDataError, CustomDataBaseError } = require('../validations/errors');

const errorHandler = (
  error,
  req = request,
  res = response,
  logMessage = 'Default message'
) => {
  if (error instanceof CustomDataBaseError || error instanceof CustomDataError) {
    logger.warn(`${logMessage}: ${error.message}`);
    return res.status(400).json({ ok: false, msg: error.message });
  }

  logger.fatal(`${logMessage}:`);
  console.error(error);
  return res.status(500).json({ ok: false, msg: `Internal server error ${logMessage}` });
};

module.exports = { errorHandler };
