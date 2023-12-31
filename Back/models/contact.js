const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Contact = sequelize.define(
	'contact',
	{
		Contact_id: {
			type: Sequelize.DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		firstName: Sequelize.DataTypes.STRING,
		lastName: Sequelize.DataTypes.STRING,
		email: Sequelize.DataTypes.STRING,
		message: Sequelize.DataTypes.TEXT,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);
module.exports = Contact;
