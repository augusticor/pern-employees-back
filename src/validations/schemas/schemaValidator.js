const CustomDataError = require('../errors/CustomDataError');
const loginSchema = require('./loginSchema');
const registerSchema = require('./registerSchema');

const registerValidator = (registerData = {}) => {
  const { error, value } = registerSchema.validate(registerData, { abortEarly: false });

  if (error) throw new CustomDataError(error.message);

  return value;
};

const loginValidator = (loginData) => {
  const { error, value } = loginSchema.validate(loginData, { abortEarly: false });

  if (error) throw new CustomDataError(error.message);
};

module.exports = { registerValidator, loginValidator };
