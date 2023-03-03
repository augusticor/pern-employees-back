const { request, response } = require('express');
const dbqueries = require('../database/queries');
const { registerValidator } = require('../validations/schemas/schemaValidator');
const { CustomDataBaseError, CustomDataError } = require('../validations/errors');
const bcryptjs = require('bcryptjs');

const registerEmployee = async (req = request, res = response) => {
  try {
    let requestBody = { ...req.body };
    requestBody = registerValidator(requestBody);

    const salt = bcryptjs.genSaltSync(10);
    requestBody.password = bcryptjs.hashSync(requestBody.password, salt);

    const newEmployee = await dbqueries.insertEmployee(requestBody);

    return res.status(200).json({ ok: true, employee: newEmployee });
    //
  } catch (error) {
    if (error instanceof CustomDataBaseError || error instanceof CustomDataError) {
      console.error(error.message);
      return res.status(400).json({ ok: false, msg: error.message });
    }

    console.error(error);
    return res.status(500).json({ ok: false, msg: 'Internal server error creating employee' });
  }
};

module.exports = { registerEmployee };
