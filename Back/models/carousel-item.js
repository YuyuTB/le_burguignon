const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const CarouselItem = sequelize.define(
	'CarouselItem',
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
