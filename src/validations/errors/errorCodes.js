const CustomDataBaseError = require('./CustomDataBaseError');

const errorCodes = {
  22001: new CustomDataBaseError(
    'First name and last name length < 50 - Email and password < 100'
  ),
  23502: new CustomDataBaseError('Firstname, email and password are mandatory'),
  23503: new CustomDataBaseError('Manager id does not exist'),
  23514: new CustomDataBaseError('You cannot hire yourself'),
  23505: new CustomDataBaseError('Email already used'),
};

module.exports = { errorCodes };
