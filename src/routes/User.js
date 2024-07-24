const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/User');
const validateUser = require('../middlewares/validateUser');

router.post('/login', loginUser);
router.post('/register', validateUser, registerUser);

module.exports = router;