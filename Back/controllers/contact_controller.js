const { PASSWORD } = require('../config/config');
const Item = require('../models/contact');
const pass = require('../config/password');
const nodemailer = require('nodemailer');

const itemController = {
	getAllItems: async (req, res) => {
		try {
			const items = await Item.findAll();
			res.json(items);
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur lors de la récupération des items.');
		}
	},

	getItemById: async (req, res) => {
		const Contact_id = req.params.Contact_id;

		try {
			const item = await Item.findByPk(Contact_id);

			if (item) {
				res.json(item);
			} else {
				res.status(404).send("L'élément demandé n'a pas été trouvé.");
			}
		} catch (error) {
			console.error(error);
			res.status(500).send("Erreur lors de la récupération de l'élément.");
		}
	},

	createItem: async (req, res) => {
		console.log(pass.pass);
		try {
			const { firstName, lastName, email, message } = req.body;
			if (!firstName || !lastName || !email || !message) {
				return res.status(400).send('Tous les champs doivent être remplis.');
			}
			const newItem = await Item.create({
				firstName,
				lastName,
				email,
				message,
			});

			res.status(201).json(newItem);
			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: 'theo.berry.meleck@gmail.com',
					pass: pass.pass,
				},
			});

			const emailContent = `
				Prénom : ${firstName},
				Nom : ${lastName},
				Email : ${email},
				Message : ${message}
			`;
			// Configurer le contenu de l'e-mail
			const mailOptions = {
				from: 'theo.berry.meleck@gmail.com',
				to: 'contact.le.burguignon@gmail.com', // Remplacez par votre adresse e-mail
				subject:
					'Nouveau message depuis le formulaire de contact Burguignon.fr',
				text: emailContent,
			};

			// Envoyer l'e-mail
			transporter.sendMail(mailOptions, (error, info) => {
				if (error) {
					return console.log(error);
				}
				console.log('E-mail envoyé : ' + info.response);
			});
		} catch (error) {
			console.error(error);
			res.status(500).send("Erreur lors de la création d'un nouvel item.");
		}
	},

	deleteItem: async (req, res) => {
		const Contact_id = req.params.Contact_id;
		try {
			Item.destroy({ where: { Contact_id } })
				.then(() => {
					res.status(200).json({ message: 'Deleted object' });
				})
				.catch((error) => res.status(401).json({ error }));
		} catch (error) {
			console.error(error);
			res
				.status(500)
				.send(
					`Erreur lors de la suppression de l'item avec l'ID ${Contact_id}.`
				);
		}
	},
};

module.exports = itemController;
