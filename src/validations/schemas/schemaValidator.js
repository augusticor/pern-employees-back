const CustomDataError = require('../errors/CustomDataError');
const registerSchema = require('./registerSchema');

const registerValidator = (registerData = {}) => {
  const { error, value } = registerSchema.validate(registerData, { abortEarly: false });

  if (error) throw new CustomDataError(error.message);

  return value;
};

module.exports = { registerValidator };
