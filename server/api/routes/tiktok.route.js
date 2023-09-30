const express = require('express');
const router = express.Router();
const controller = require('../controllers/tiktok_controller.js');

route.post('/tiktok', controller.send_tiktok_event_api);

module.exports = router