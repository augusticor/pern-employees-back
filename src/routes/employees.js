const { Router } = require('express');
const router = Router();
const { getEmployees } = require('../controllers/employees');

router.get('/', getEmployees);

module.exports = router;
