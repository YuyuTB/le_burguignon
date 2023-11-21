const Sequelize = require('sequelize');
const sequelize = require('../app.js');

const Dessert = sequelize.define(
	'dessert',
	{
		Dessert_id: {
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
module.exports = Dessert;
