require('dotenv').config();
const { Router } = require('express');
const pool = require('../config/db');
const sendotp = Router();
const transporter = require('../config/mail');
const RandExp = require('randexp');

function sendmail(email, res) {
	const otp = new RandExp(/^[0-9a-zA-Z]{10}$/).gen();
	const mailOptions = {
		from: `${process.env.EMAIL_ADDRESS}`,
		to: `${email}`,
		subject: 'Link To Reset Password',
		text:
			'This email is for the password change for the associated account with this email. you (or someone else) have requested the reset of the password.\n\n'
			+ 'Please note down blow otp and write it in otp section.\n\n'
			+ `OTP : ${otp}\n\n`
			+ 'If you did not request this, please ignore this email.\n',
	};
	transporter.sendMail(mailOptions, (err, _response) => {
		if (err) {
			res.status(500).send(err);
		}
		res.status(200).send({ otp });
	});
}

sendotp.post('/sendotp', (req, res) => {
	if (req.body.type === "user") {
		pool.query(`SELECT email FROM users WHERE username = '${req.body.value}';`, (error, results) => {
			if (error) {
				res.status(500).send(error);
			}
			if (results.rows.length > 0) {
				console.log(results.rows);
				sendmail(results.rows[0].email, res);
			} else {
				res.status(500).send(undefined);
			}
		});
	}
	if (req.body.type === "email") {
		sendmail(req.body.value, res);
	}
})

module.exports = sendotp;