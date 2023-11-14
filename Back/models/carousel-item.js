const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../app.js');

module.exports = (sequelize) => {
	const CarouselItem = sequelize.define(
		'carouselitem',
		{
			CarouselItem_id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			image: DataTypes.STRING,
			description: DataTypes.TEXT,
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return CarouselItem;
};
