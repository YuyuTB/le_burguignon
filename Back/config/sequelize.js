const dbConfig = require('./config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	pool: {
		max: dbConfig.pool.max,
		min: dbConfig.pool.min,
		acquire: dbConfig.pool.acquire,
		idle: dbConfig.pool.idle,
	},
	port: dbConfig.PORT,
	dialectOptions: {
		supportBigNumbers: true,
		bigNumberStrings: true,
	},
});

module.exports = sequelize;
