const bcrypt = require('bcrypt');
const user = require('../config/user');
const sequelize = require('../config/sequelize');
const Sequelize = require('sequelize');

const User = sequelize.define(
	'User',
	{
		username: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		role: {
			type: Sequelize.ENUM('admin', 'user'),
			defaultValue: 'user',
		},
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);
module.exports = { User };
// User.beforeCreate(async (user) => {
// 	const saltRounds = 10;
// 	const hashedPassword = await bcrypt.hash(user.password, saltRounds);
// 	user.password = hashedPassword;
// });

// User.sync({ force: true }).then(() => {
// 	User.create({
// 		username: user.username,
// 		password: user.password,
// 		role: user.role,
// 	});
// });
