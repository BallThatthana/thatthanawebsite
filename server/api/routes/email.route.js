const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Route to send an email
router.post('/send-email', emailController.sendEmail);
router.post('/send-order-email', emailController.sendOrderEmail);

module.exports = router;
