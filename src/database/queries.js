const db = require('./config');
const { errorCodes } = require('../validations/errors/errorCodes');

const insertEmployee = async ({
  firstName,
  lastName = null,
  email,
  password,
  managerId = null,
  role = false,
}) => {
  try {
    const queryText =
      'INSERT INTO employees (first_name, last_name, email, password, manager_id, role) values ($1, $2, $3, $4, $5, $6) RETURNING id, email, role';

    const values = [
      firstName,
      lastName || null,
      email,
      password,
      managerId || null,
      role || false,
    ];

    const createdEmployee = await db.query(queryText, values);

    return { ...createdEmployee.rows[0] };
    //
  } catch (error) {
    const { code } = error;
    if (errorCodes[code]) throw errorCodes[code];

    throw new Error('DB Error inserting employee', { cause: error });
  }
};

const getEmployeeByEmail = async (email) => {
  try {
    const query = 'SELECT * FROM EMPLOYEES WHERE email = $1';
    const { rows } = await db.query(query, [email]);
    if (rows.length === 0) return null;

    return { ...rows[0] };
    //
  } catch (error) {
    const { code } = error;
    if (errorCodes[code]) throw errorCodes[code];

    throw new Error('DB Error searching employee', { cause: error });
  }
};

module.exports = { insertEmployee, getEmployeeByEmail };
