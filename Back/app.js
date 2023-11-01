const Sequelize = require('sequelize');
const dbConfig = require('./config.js');

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig.options);

sequelize.authenticate().then(() => {
    console.log('Authentication successful');
}).catch((err) => {
    console.log("Error connecting to the Database" );
});