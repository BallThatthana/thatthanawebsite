/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const cors = require('cors')({
          origin: ['https://ballthatthana-app.web.app', 'http://localhost:8080'],
          methods: ['GET', 'POST'], // Specify the allowed HTTP methods
          allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers
});

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  service: 'gmail',
  secure: false,
  auth: {
    user: process.env.VUE_APP_OWNER_MAIL,
    pass: process.env.VUE_APP_OWNER_PASS
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {

    //must set header too!!!
    res.setHeader('Access-Control-Allow-Origin', 'https://ballthatthana-app.web.app, http://localhost');
    res.setHeader('Access-Control-Allow-Credentials', 'true');

  cors(req, res, () => {
    // Extract necessary data (name, email, text) from req.body
    const { name, email, text, address, items } = req.body;

    // Construct email content for the visitor
    const visitorMail = {
      from: process.env.VUE_APP_OWNER_MAIL,
      to: email,
      subject: 'Thank you for your email.',
      text: `Hi ${name},\n\nThank you for your email. I will get back to you as soon as possible.\n\nMessage: ${text}\n\nBest regards,\nBall Thatthana`,
      address,
      items
    };

    // Send email to the visitor
    transporter.sendMail(visitorMail, (err, info) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while sending the email.' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email sent successfully.' });
      }
    });

    // Send email to yourself
    const myEmailCopy = {
      from: process.env.VUE_APP_OWNER_MAIL,
      to: process.env.VUE_APP_OWNER_MAIL,
      subject: 'There is an email from visitor',
      text: `Hi,\n\nAn email received from ${name} ${email}. Please respond as soon as possible.\n\nMessage: ${text}`,
      address,
      items
    };

    // Send the email
    transporter.sendMail(myEmailCopy, (err, info) => {
      if (err) {
        console.error(err);
        // Handle the error here
      } else {
        console.log('Email sent:', info.response);
        // Handle the success here
      }
    });
  });
});

exports.sendOrderEmail = functions.https.onRequest((req, res) => {

  //must set header too!!!
  res.setHeader('Access-Control-Allow-Origin', 'https://ballthatthana-app.web.app, http://localhost');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

cors(req, res, () => {
  // Extract necessary data (name, email, text) from req.body
  const { name, email, text, address, items } = req.body;

  // Construct email content for the visitor
  let visitorMail = {
    from: process.env.VUE_APP_MAIL_USER,
    to: email,
    subject: 'Thank you for your order.',
    text: `Hi ${name},\n\nThank you for your order.
    \nOrders:`,
  };

  let total = 0;

  items.forEach(item => {
    visitorMail.text += `Orders ${item.title} - ${item.price}\n`;
    total += item.price * item.quantity;
  })
  visitorMail += `Order amount ${total}\n`
  visitorMail += ` Address: ${address}
  \n\nBest regards,\nBall Thatthana`
  
  // Send email to the visitor
  transporter.sendMail(visitorMail, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });

  // Send email to yourself
  const myEmailCopy = {
    from: process.env.VUE_APP_OWNER_MAIL,
    to: process.env.VUE_APP_OWNER_MAIL,
    subject: 'There is an email from visitor',
    text: `Hi,\n\nAn email received from ${name} ${email}. Please respond as soon as possible.\n\nMessage: ${text}`,
    address,
    items
  };

  // Send the email
  transporter.sendMail(myEmailCopy, (err, info) => {
    if (err) {
      console.error(err);
      // Handle the error here
    } else {
      console.log('Email sent:', info.response);
      // Handle the success here
    }
  });
});
});




// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
