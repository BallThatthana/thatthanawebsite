const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: ['https://ballthatthana-app.web.app', 'http://localhost:8080', 'https://bonthatthana.netlify.app'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
});

// Helper function to build the email sender using runtime environment keys
function createEmailTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    service: 'gmail',
    secure: false,
    auth: {
      user: process.env.VUE_APP_OWNER_MAIL,
      pass: process.env.VUE_APP_OWNER_PASS
    },
  });
}

// 1. SEND EMAIL FUNCTION
exports.sendEmail = functions.runWith({
  secrets: ["VUE_APP_OWNER_MAIL", "VUE_APP_OWNER_PASS"]
}).https.onRequest((req, res) => {
  
  cors(req, res, async () => {
    try {
      const { name, email, text } = req.body;

      if (!process.env.VUE_APP_OWNER_MAIL || !process.env.VUE_APP_OWNER_PASS) {
        throw new Error("Missing credentials inside Cloud environment variables.");
      }

      const visitorMail = {
        from: process.env.VUE_APP_OWNER_MAIL,
        to: email,
        subject: 'Thank you for your email.',
        text: `Hi ${name},\n\nThank you for your email. I will get back to you as soon as possible.\n\nMessage: ${text}\n\nBest regards,\nBall Thatthana`
      };

      const myEmailCopy = {
        from: process.env.VUE_APP_OWNER_MAIL,
        to: process.env.VUE_APP_OWNER_MAIL,
        subject: 'There is an email from visitor',
        text: `Hi,\n\nAn email received from ${name} (${email}). Please respond as soon as possible.\n\nMessage: ${text}`
      };

      const transporter = createEmailTransporter();
      
      // Wait for both emails to finish completely before sending the HTTP response
      await Promise.all([
        transporter.sendMail(visitorMail),
        transporter.sendMail(myEmailCopy)
      ]);

      return res.status(200).json({ message: 'Emails sent successfully.' });

    } catch (err) {
      console.error("Function crashed:", err);
      return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  });
});

// 2. SEND ORDER EMAIL FUNCTION
exports.sendOrderEmail = functions.runWith({
  secrets: ["VUE_APP_OWNER_MAIL", "VUE_APP_OWNER_PASS"]
}).https.onRequest((req, res) => {

  cors(req, res, async () => {
    try {
      const { name, email, text, address, items } = req.body;

      if (!process.env.VUE_APP_OWNER_MAIL || !process.env.VUE_APP_OWNER_PASS) {
        throw new Error("Missing credentials inside Cloud environment variables.");
      }

      let visitorMailText = `Hi ${name},\n\nThank you for your order.\n\nOrders:\n`;
      let total = 0;

      if (items && Array.isArray(items)) {
        items.forEach(item => {
          visitorMailText += `- ${item.title} - ${item.price}\n`;
          total += item.price * (item.quantity || 1);
        });
      }
      
      visitorMailText += `\nOrder amount: ${total}\n`;
      visitorMailText += `Address: ${address}\n\nBest regards,\nBall Thatthana`;

      const visitorMail = {
        from: process.env.VUE_APP_OWNER_MAIL,
        to: email,
        subject: 'Thank you for your order.',
        text: visitorMailText
      };

      const myEmailCopy = {
        from: process.env.VUE_APP_OWNER_MAIL,
        to: process.env.VUE_APP_OWNER_MAIL,
        subject: 'New Order Received',
        text: `Hi,\n\nYou received a new order from ${name} (${email}).\n\nDetails:\n${visitorMailText}`
      };

      const transporter = createEmailTransporter();
      
      await Promise.all([
        transporter.sendMail(visitorMail),
        transporter.sendMail(myEmailCopy)
      ]);

      return res.status(200).json({ message: 'Order emails sent successfully.' });

    } catch (err) {
      console.error("Function crashed:", err);
      return res.status(500).json({ error: 'Internal Server Error', details: err.message });
    }
  });
});