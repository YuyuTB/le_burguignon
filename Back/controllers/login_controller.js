// Assure-toi que le chemin est correct et que tu importes le modèle User correctement
const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/tokenUtils');

const authController = {
	login: async (req, res, next) => {
		const { username, password } = req.body;
		try {
			const user = await User.findOne({ where: { username } });

			if (user) {
				const passwordMatch = await bcrypt.compare(
					password,
					user.password
				);

				if (passwordMatch) {
					const token = generateToken(user);
					res.json({ token });
				} else {
					res.status(401).json({ message: 'Invalid credentials' });
				}
			} else {
				// Gérer l'authentification échouée
				res.status(401).json({ message: 'Invalid credentials' });
			}
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal Server Error' });
		}
	},
};

module.exports = authController;
