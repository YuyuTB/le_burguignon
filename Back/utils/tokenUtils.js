const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

function generateToken(User) {
	// Générez le token en utilisant la bibliothèque jwt
	const token = jwt.sign(
		{ UserId: User.id, username: User.username },
		'test',
		{ expiresIn: '1h' }
	);
	return token;
}

module.exports = { generateToken };
