const { Router } = require('express');
const router = Router();
const { registerEmployee } = require('../controllers/auth');

router.post('/register', registerEmployee);

module.exports = router;
