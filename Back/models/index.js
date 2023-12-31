// models/index.js
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js');
const db = {};

const sequelize = new Sequelize(config);

// Utilisez une fonction pour charger les modèles
function loadModels(directory) {
	fs.readdirSync(directory)
		.filter((file) => {
			return (
				file.indexOf('.') !== 0 &&
				file !== basename &&
				file.slice(-3) === '.js'
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
