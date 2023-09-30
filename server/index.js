const express = require('express');
//const bodyParser = require("body-parser");
const app = express();
const cors = require('cors');
require('dotenv').config();

// Middleware
//app.use(bodyParser)
app.use(express.json());
app.use(cors({
    origin: ['https://ballthatthana-app.web.app', 'http://localhost'],
}));

// Routes
// const tiktokRoute = require('./api/routes/tiktok.route');
const emailRoute = require('./api/routes/email.route'); // Add this line
// app.use('/api', tiktokRoute);
app.use('/', emailRoute); // Use the email route

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
