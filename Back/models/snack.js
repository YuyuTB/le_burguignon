const Sequelize = require('sequelize');
const sequelize = require('../app.js');

const Snack = sequelize.define('Snack', {
    Snack_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.DataTypes.STRING,
    image: Sequelize.DataTypes.STRING,
    description: Sequelize.DataTypes.TEXT
},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = Snack;