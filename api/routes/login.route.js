const express = require('express');
const router = express.Router();
const conf = require('../conf');
const loginCtrl = require('../controllers/login.controller');

router.post('/', loginCtrl.login);


module.exports = router;
