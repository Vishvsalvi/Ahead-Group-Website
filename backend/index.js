const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 4000;

// Middleware to parse JSON data
app.use(bodyParser.json());



const sendEmail = async(req, res) =>{
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'estel.cummerata@ethereal.email',
            pass: 'qQPMZ3frkCgvPy86rw'
        }
    });

    const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "This is the subject of the email", // Subject line
        text: "This is the plain text", // plain text body
        html: "<h1>Hello world 💖</h1>", // html body
      });

      try {
        await transporter.sendMail(info);
        return res.status(200).json({ msg: "Email has been sent!!!" });
      } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: err.message });
      }
      

  
}

// Endpoint to handle form submission
app.post('/submit-form', sendEmail);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
