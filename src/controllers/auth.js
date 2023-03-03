const { request, response } = require('express');
const dbqueries = require('../database/queries');
const {
  registerValidator,
  loginValidator,
} = require('../validations/schemas/schemaValidator');
const { CustomDataBaseError, CustomDataError } = require('../validations/errors');
const bcryptjs = require('bcryptjs');
const logger = require('../utils/logger');

const registerEmployee = async (req = request, res = response) => {
  try {
    let requestBody = { ...req.body };
    requestBody = registerValidator(requestBody);

    const salt = bcryptjs.genSaltSync(10);
    requestBody.password = bcryptjs.hashSync(requestBody.password, salt);

    const newEmployee = await dbqueries.insertEmployee(requestBody);
    logger.info(`New employee ${newEmployee.id} - ${newEmployee.email}`);

    return res.status(200).json({ ok: true, employee: newEmployee });
    //
  } catch (error) {
    if (error instanceof CustomDataBaseError || error instanceof CustomDataError) {
      logger.warn(`Creating employee: ${error.message}`);
      return res.status(400).json({ ok: false, msg: error.message });
    }

    logger.fatal('Creating employee:');
    console.error(error);
    return res.status(500).json({ ok: false, msg: 'Internal server error creating employee' });
  }
};

const loginEmployee = async (req = request, res = response) => {
  try {
    const requestBody = { ...req.body };
    loginValidator(requestBody);

    const foundEmployee = await dbqueries.getEmployeeByEmail(requestBody.email);

    if (!foundEmployee) {
      logger.warn(`No employee found with email: ${requestBody.email}`);
      return res
        .status(404)
        .json({ ok: false, msg: `No employee found with email: ${requestBody.email}` });
    }

    // Validate password
    const isValidPassword = bcryptjs.compareSync(requestBody.password, foundEmployee.password);
    if (!isValidPassword) {
      logger.warn(`User ${requestBody.email} attempted to login`);
      return res.status(401).json({ ok: false, msg: 'Wrong credentials' });
    }

    const employee = {
      id: foundEmployee.id,
      firstName: foundEmployee.first_name,
      lastName: foundEmployee.last_name,
      email: foundEmployee.email,
      managerId: foundEmployee.manager_id,
      role: foundEmployee.role,
    };

    logger.info(`Employee ${requestBody.email} logged in`);
    return res.status(200).json({ ok: true, employee });
    //
  } catch (error) {
    if (error instanceof CustomDataBaseError || error instanceof CustomDataError) {
      logger.warn(`Creating employee: ${error.message}`);
      return res.status(400).json({ ok: false, msg: error.message });
    }

    logger.fatal('Login:');
    console.error(error);
    return res.status(500).json({ ok: false, msg: 'Internal server error login' });
  }
};

module.exports = { registerEmployee, loginEmployee };
