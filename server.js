require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const path = require("path");
const dns = require("dns");
const validator = require("email-validator");
const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const validateEmailFormat = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateEmailDomain = (email, callback) => {
  const domain = email.split("@")[1];
  dns.resolveMx(domain, (err, addresses) => {
    if (err || addresses.length === 0) {
      callback(false);
    } else {
      callback(true);
    }
  });
};

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  if (!validator.validate(email)) {
    return res
      .status(400)
      .send({ success: false, message: "Invalid email address." });
  }

  if (!validateEmailFormat(email)) {
    return res.status(400).send({ message: "Invalid email format" });
  }

  validateEmailDomain(email, (isValidDomain) => {
    if (!isValidDomain) {
      return res.status(400).send({ message: "Invalid email domain" });
    }

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send({ message: "Error sending email", error });
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).send({ message: "Email sent successfully" });
      }
    });
  });
});

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
