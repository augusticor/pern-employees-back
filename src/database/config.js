const { Pool } = require('pg');
// use the config from environment variables
const pool = new Pool();

module.exports = { pool };
