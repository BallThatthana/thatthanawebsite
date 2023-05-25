const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:8080'
}))

// Routes
const router = require('./api/router');
app.use('/api', router);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
