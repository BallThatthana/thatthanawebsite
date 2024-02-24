// const nodemailer = require('nodemailer');

// async function sendEmail(req, res) {
//   const { name, email, text } = req.body;

//   //must set header too!!!
//   res.setHeader('Access-Control-Allow-Origin', 'https://ballthatthana-app.web.app,http://localhost');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');

//   // Create a nodemailer transporter
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     service: 'gmail',
//     secure: false,
//     auth: {
//       user: process.env.VUE_APP_MAIL_USER, //email
//       pass: process.env.VUE_APP_MAIL_PASSWORD, //password
//     },
//   });

//   // Construct the email body for visitor
//   let visitorMail = {
//     from: process.env.VUE_APP_MAIL_USER,
//     to: email,
//     subject: 'Thank you for your email.',
//     text: `Hi ${name},\n\nThank you for your email. I will get back to you as soon as possible.\n\nBest regards,\nBall Thatthana`,
//   };

//   // Send the email to visitor
//   transporter.sendMail(visitorMail, (err, info) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred while sending the email.' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully.' });
//     }
//   });

//   // send email to me
//   let myEmailCopy = {
//     from: process.env.VUE_APP_MAIL_USER,
//     to: process.env.VUE_APP_MAIL_USER,

//     subject: 'There is an email from visitor',
//     text: `Hi ,\n\nan Email received from ${name} ${email}. Please get back asap.`,
//   };

//   // Send the email
//   transporter.sendMail(myEmailCopy, (err, info) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred while sending the email.' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully.' });
//     }
//   });
// }

// async function sendOrderEmail(req, res) {
//   const { name, email, address, items, company } = req.body;

//   //must set header too!!!
//   res.setHeader('Access-Control-Allow-Origin', 'https://ballthatthana-app.web.app,http://localhost');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');

//   // Create a nodemailer transporter
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     service: 'gmail',
//     secure: false,
//     auth: {
//       user: process.env.VUE_APP_MAIL_USER, //email
//       pass: process.env.VUE_APP_MAIL_PASSWORD, //password
//     },
//   });
//   let visitorMail = {
//     from: process.env.VUE_APP_MAIL_USER,
//     to: email,
//     subject: 'Thank you for your order.',
//     text: `Hi ${name},\n\nThank you for your order.
//     \nOrders:`,
//   };

//   let total = 0;

//   items.forEach(item => {
//     visitorMail.text += `Orders ${item.title} - ${item.price}\n`;
//     total += item.price * item.quantity;
//   })
//   visitorMail += `Order amount ${total}\n`
//   visitorMail += ` Address: ${address}
//   \n\nBest regards,\nBall Thatthana`
  
//   // Send the email to visitor
//   transporter.sendMail(visitorMail, (err, info) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred while sending the email.' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully.' });
//     }
//   });

//   // send email to me
//   let myEmailCopy = {
//     from: process.env.VUE_APP_MAIL_USER,
//     to: process.env.VUE_APP_MAIL_USER,

//     subject: 'There is an email from visitor',
//     text: `Hi ,\n\nan Email received from ${name} ${email}. Please get back asap.`,
//   };

//   // Send the email
//   transporter.sendMail(myEmailCopy, (err, info) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'An error occurred while sending the email.' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).json({ message: 'Email sent successfully.' });
//     }
//   });
// }

// module.exports = { sendEmail, sendOrderEmail };
