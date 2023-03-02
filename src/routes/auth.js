const { Router } = require('express');
const router = Router();
const { registerEmployee } = require('../controllers/auth');

router.get('/register', registerEmployee);

module.exports = router;
