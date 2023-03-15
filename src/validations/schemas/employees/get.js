const Joi = require('joi');

const getEmployeesSchema = Joi.object({
  employeeId: Joi.number().positive().greater(0).required(),
});

module.exports = getEmployeesSchema;
