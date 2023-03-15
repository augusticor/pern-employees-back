const { request, response } = require('express');
const dbqueries = require('../database/queries');
const logger = require('../utils/logger');
const { getEmployeesValidator } = require('../validations/schemas/schemaValidator');
const { errorHandler } = require('./errorHandler');

const employees = async (req = request, res = response) => {
  try {
    const employeeId = getEmployeesValidator(req.body.employeeId);
    const dbres = await dbqueries.getAllEmployees(employeeId);

    logger.info(`Get employees requested by employee ${employeeId}`);
    return res.status(200).json({ ok: true, employees: dbres });
  } catch (error) {
    errorHandler(error, req, res, 'Getting employees');
  }
};

const employeesHiredByManager = async (req = request, res = response) => {
  try {
    const managerId = getEmployeesValidator(req.params.managerid);
    const colleagues = await dbqueries.getEmployeesByManager(managerId);

    logger.info(`Employees by manager ${managerId}`);
    return res.status(200).json({ ok: true, employees: colleagues });
  } catch (error) {
    errorHandler(error, req, res, 'Get employees by manager');
  }
};

module.exports = { employees, employeesHiredByManager };
