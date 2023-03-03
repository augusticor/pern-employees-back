require('dotenv').config();
const db = require('./database/config');
const server = require('./app');
const logger = require('./utils/logger');

// DataBase
db.testDatabaseConnection();

// Server
const port = process.env.PORT || 3001;
server.listen(port, () => logger.info(`Server listening on port ${port}`));
