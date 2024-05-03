const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const RegularBurger = sequelize.define(
	'regularburger',
	{
		RegularBurger_id: {
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
module.exports = RegularBurger;
