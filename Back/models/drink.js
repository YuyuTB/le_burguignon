const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Drink = sequelize.define(
	'drink',
	{
		Drink_id: {
			type: Sequelize.DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: Sequelize.DataTypes.STRING,
		imgUrl: Sequelize.DataTypes.STRING,
		description: Sequelize.DataTypes.TEXT,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);
module.exports = Drink;
