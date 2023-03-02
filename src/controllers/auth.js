const { request, response } = require('express');
const { pool } = require('../database/config');

const registerEmployee = async (req = request, res = response) => {
  const queryres = await pool.query('SELECT 4+4');
  console.log(queryres);

  return res.status(200).json({ ok: true });
};

module.exports = { registerEmployee };
