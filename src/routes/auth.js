const { Router } = require('express');
const router = Router();
const { registerEmployee, loginEmployee } = require('../controllers/auth');

router.post('/register', registerEmployee);

router.post('/login', loginEmployee);

module.exports = router;
