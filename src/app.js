const express = require('express');
const server = express();
const cors = require('cors');

// Configurations
server.use(cors());

server.use(express.json());

// Routes
server.use('/api/auth', require('./routes/auth'));

server.use('/api/employees', require('./routes/employees'));

module.exports = server;
