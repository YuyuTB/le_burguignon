const Sequelize = require('sequelize');
const sequelize = require('../app.js');

module.exports = (sequelize) => {
	const Snack = sequelize.define(
		'snack',
		{
			Snack_id: {
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

	return Snack;
};
