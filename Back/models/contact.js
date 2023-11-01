const Sequelize = require('sequelize');
const sequelize = require('../app.js');

const Contact = sequelize.define('Contact', {
    Contact_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: Sequelize.DataTypes.STRING,
    lastName: Sequelize.DataTypes.STRING,
    email: Sequelize.DataTypes.STRING,
    message: Sequelize.DataTypes.TEXT
},
{
    freezeTableName: true,
    timestamps: true
})

module.exports = Contact;