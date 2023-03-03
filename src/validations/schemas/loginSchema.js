const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,60}$'))
    .rule({
      message:
        'Just numbers and letters in password and length must be greater than 5 and less than 60',
    })
    .required(),
});

module.exports = loginSchema;
