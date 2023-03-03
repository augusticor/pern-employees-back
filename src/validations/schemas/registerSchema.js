const Joi = require('joi');

const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).required(),

  lastName: Joi.string().min(2).max(50),

  email: Joi.string().email().required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{5,60}$'))
    .rule({ message: 'Just numbers and letters in password and length must be greater than 5 and less than 60' })
    .required(),

  managerId: Joi.number().integer().positive().min(1),

  role: Joi.boolean(),
});

module.exports = registerSchema;
