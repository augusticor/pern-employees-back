const express = require('express');
const server = express();

// Routes
server.use('/api/auth', require('./routes/auth'));

module.exports = server;
