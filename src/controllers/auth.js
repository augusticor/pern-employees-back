const { request, response } = require('express');
const dbqueries = require('../database/queries');
const CustomDataBaseError = require('../errors/CustomDataBaseError');

const registerEmployee = async (req = request, res = response) => {
  try {
    const newEmployee = await dbqueries.insertEmployee({ ...req.body });

    return res.status(200).json({ ok: true, employee: newEmployee });
    //
  } catch (error) {
    if (error instanceof CustomDataBaseError) {
      console.error(error.message);
      return res.status(400).json({ ok: false, msg: error.message });
    }

    console.error(error.cause);
    return res.status(500).json({ ok: false, msg: 'Internal server error creating employee' });
  }
};

module.exports = { registerEmployee };
