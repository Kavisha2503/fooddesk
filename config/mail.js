const { createTransport } = require("nodemailer");

const transporter = createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: `${process.env.EMAIL_ADDRESS}`,
        pass: `${process.env.EMAIL_PASSWORD}`,
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;