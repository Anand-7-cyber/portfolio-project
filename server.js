// Required modules
const express = require('express');  // Express framework for the server
const bodyParser = require('body-parser');  // To parse incoming form data
const nodemailer = require('nodemailer');  // For sending emails

const app = express();

// Middleware for parsing incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a Nodemailer transporter (to send email)
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Gmail email service
  auth: {
    user: 'mahakalbhakt7085@gmail.com',  // Replace with your Gmail address
    pass: 'mmdh gcrp ptwd rwvy'    // Replace with your Gmail password or App Password (if 2FA is enabled)
  }
});

// Serve static files like HTML, CSS, JS from the 'public' folder
app.use(express.static('public'));

// Handle form submission
app.post('/send', (req, res) => {
  const { email, message } = req.body;  // Extract email and message from the form

  // Email details
  const mailOptions = {
    from: 'your-email@gmail.com',  // Sender email
    to: 'your-email@gmail.com',    // Recipient email (same for testing)
    subject: 'New Message from Portfolio Contact Form',
    text: `You have received a new message from ${email}:\n\n${message}`  // Message content
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error);
      res.send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Message sent successfully');
    }
  });
});

// Serve the index.html page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');  // Serve the HTML page
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
