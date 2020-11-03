// set environment variables from .env
const dotenv = require('dotenv');
dotenv.config()

const express = require('express');
const nodemailer = require('nodemailer');
const { register } = require('ts-node');


const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// set up mail transporter
const transporter = nodemailer.createTransport({
        host: "smtp.web.de",
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS
        }
      });


// verify connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

app.use(bodyParser.json());

app.post('/api/mail', (req, res) => {
    const message = {
        from: 'tt.markus@web.de', // Sender address
        to: 'tt.markus@web.de',         // List of recipients
        subject: req.body.summary, // Subject line
        text: `${req.body.mail} sent the following message: 
        
        ${req.body.message}` // Plain text body
    };
    transporter.sendMail(message);
    console.log(req.body);
    res.send(req.body)
})


app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});