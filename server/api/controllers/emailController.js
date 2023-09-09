const nodemailer = require('nodemailer');

async function sendEmail(req, res) {
  const { name, email, text } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: 'gmail',
    secure: false,
    auth: {
      user: "thatthana.d@gmail.com", //email
      pass: "akkwlwfihricgnqy", //password
    },
  });

  // Construct the email body for visitor
  let visitorMail = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Thank you for your email.',
    text: `Hi ${name},\n\nThank you for your email. I will get back to you as soon as possible.\n\nBest regards,\nBall Thatthana`,
  };

  // Send the email to visitor
  transporter.sendMail(visitorMail, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });

  // send email to me
  let myEmailCopy = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: 'There is an email from visitor',
    text: `Hi ,\n\nan Email received from ${name} ${email}. Please get back asap.`,
  };

  // Send the email
  transporter.sendMail(myEmailCopy, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });
}

module.exports = { sendEmail };
