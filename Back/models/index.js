'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config
	);
}

// Utilisez une fonction pour charger les modèles
function loadModels(directory) {
	fs.readdirSync(directory)
		.filter((file) => {
			return (
				file.indexOf('.') !== 0 &&
				file !== basename &&
				file.slice(-3) === '.js' &&
				file.indexOf('.test.js') === -1
			);
		})
		.forEach((file) => {
			const model = require(path.join(directory, file))(
				sequelize,
				Sequelize.DataTypes
			);
			db[model.name.toLowerCase()] = model;
		});
}

// Chargez les modèles du dossier 'models'
loadModels(__dirname);

// Associez les modèles si la méthode 'associate' est définie
Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
