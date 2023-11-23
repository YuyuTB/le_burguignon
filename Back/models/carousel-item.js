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
		imgUrl: { type: DataTypes.STRING, allowNull: true },
		description: DataTypes.TEXT,
	},
	{
		freezeTableName: true,
		timestamps: false,
	}
);

module.exports = CarouselItem;
