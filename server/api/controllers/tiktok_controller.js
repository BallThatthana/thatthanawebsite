const express = require('express');
const router = express.Router();

// Define your middleware function
const send_conversion_api = async function (req, res, next) {
  try {
    // Your code here
    res.send('Conversion API response');
  } catch (error) {
    next(error);
  }
};

// Define routes using the middleware function
router.get('/conversion', send_conversion_api);

module.exports = {send_conversion_api};