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
      user: process.env.MAIL_USER, //email
      pass: process.env.MAIL_PASSWORD, //password
    },
  });

  // Construct the email body
  let mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Thank you for your email.',
    text: `Hi ${name},\n\nThank you for your email. I will get back to you as soon as possible.\n\nBest regards,\nBall Thatthana`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully.' });
    }
  });

  console.log(mailOptions)
}

module.exports = { sendEmail };
