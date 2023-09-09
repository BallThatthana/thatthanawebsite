const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middleware
app.use(express.json());
app.use(cors({
    // origin: 'http://localhost:8080', //local
    origin: 'https://ballthatthana-app.web.app',
}));

// Routes
// const tiktokRoute = require('./api/routes/tiktok.route');
const emailRoute = require('./api/routes/email.route'); // Add this line
// app.use('/api', tiktokRoute);
app.use('/api', emailRoute); // Use the email route

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
