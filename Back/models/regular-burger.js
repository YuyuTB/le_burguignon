const Sequelize = require('sequelize');
const sequelize = require('../app.js');

module.exports = (sequelize) => {
	const RegularBurger = sequelize.define(
		'regularburger',
		{
			RegularBurger_id: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			name: Sequelize.DataTypes.STRING,
			image: Sequelize.DataTypes.STRING,
			description: Sequelize.DataTypes.TEXT,
		},
		{
			freezeTableName: true,
			timestamps: false,
		}
	);

	return RegularBurger;
};
