require('dotenv').config();
const db = require('./database/config');
const server = require('./app');

// DB test connection
(async () => {
  const { rows } = await db.query('SELECT current_database()');
  console.log(`PostgreSQL online - DB ${rows?.at(0)?.current_database}`);
})();

// Server
const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
