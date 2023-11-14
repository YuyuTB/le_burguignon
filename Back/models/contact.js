const Sequelize = require('sequelize');
const sequelize = require('../app.js');

module.exports = (sequelize) => {
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
			timestamps: true,
		}
	);

	return Contact;
};
