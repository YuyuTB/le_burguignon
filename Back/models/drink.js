const Sequelize = require('sequelize');
const sequelize = require('../app.js');

module.exports = (sequelize) => {
	const Drink = sequelize.define(
		'drink',
		{
			Drink_id: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: Sequelize.DataTypes.STRING,
			image: Sequelize.DataTypes.STRING,
			description: Sequelize.DataTypes.TEXT,
			isActive: Sequelize.DataTypes.BOOLEAN,
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return Drink;
};
