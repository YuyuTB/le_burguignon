const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'theo.berry.meleck@gmail.com',
		pass: 'Reglisse89.',
	},
});
const mail = 'tberry.mail.jeux@gmail.com';
const fromMail = 'theo.berry.meleck@gmail.com';

module.exports = { transporter, mail };
