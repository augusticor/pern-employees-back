const { Pool } = require('pg');
// use the config from environment variables
const pool = new Pool();

const testDatabaseConnection = async () => {
  const { rows } = await pool.query('SELECT current_database()');
  console.log(`PostgreSQL online - DB ${rows?.at(0)?.current_database}`);
};

module.exports = {
  query: (text, params, resultcallback) => pool.query(text, params, resultcallback),
  testDatabaseConnection,
};
