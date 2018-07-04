const express = require('express');
const router = express.Router();
const jwt = require("../jwt");
const timelineCtrl = require('../controllers/timeline.controller');

router.use(jwt.checkJWT)
router.get('/', timelineCtrl.getTimeLineByTeam);

module.exports = router;
