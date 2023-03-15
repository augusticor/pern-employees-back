const { Router } = require('express');
const router = Router();
const { employees, employeesHiredByManager } = require('../controllers/employees');

router.get('/', employees);

router.get('/hired/:managerid', employeesHiredByManager);

module.exports = router;
