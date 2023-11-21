const Sequelize = require('sequelize');
const sequelize = require('../app.js');

const TemporaryBurger = sequelize.define(
	'temporaryburger',
	{
		TemporaryBurger_id: {
			type: Sequelize.DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: Sequelize.DataTypes.STRING,
		imgUrl: Sequelize.DataTypes.STRING,
		description: Sequelize.DataTypes.TEXT,
		isActive: Sequelize.DataTypes.BOOLEAN,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);
module.exports = TemporaryBurger;
