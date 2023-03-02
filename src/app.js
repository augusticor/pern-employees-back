const express = require('express');
const server = express();

// Configurations
server.use(express.json());

// Routes
server.use('/api/auth', require('./routes/auth'));

module.exports = server;
