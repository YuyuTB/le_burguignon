const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../app.js');

const CarouselItem = sequelize.define(
	'carouselitem',
	{
		CarouselItem_id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		imgUrl: DataTypes.STRING,
		description: DataTypes.TEXT,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);
module.exports = CarouselItem;
