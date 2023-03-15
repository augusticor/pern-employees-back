const { request, response } = require('express');
const dbqueries = require('../database/queries');
const logger = require('../utils/logger');
const { getEmployeesValidator } = require('../validations/schemas/schemaValidator');
const { errorHandler } = require('./errorHandler');

const getEmployees = async (req = request, res = response) => {
  try {
    const { employeeId } = getEmployeesValidator({ ...req.body });
    const dbres = await dbqueries.getAllEmployees(employeeId);

    logger.info(`Get employees requested by employee ${employeeId}`);
    return res.status(200).json({ ok: true, employees: dbres });
  } catch (error) {
    errorHandler(error, req, res, 'Getting employees');
  }
};

module.exports = { getEmployees };
