require('dotenv').config();
const db = require('./database/config');
const server = require('./app');

// DataBase
db.testDatabaseConnection();

// Server
const port = process.env.PORT || 3001;
server.listen(port, () => console.log(`Server listening on port ${port}`));
