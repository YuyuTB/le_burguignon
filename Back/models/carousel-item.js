const Sequelize = require('sequelize');
const sequelize = require('../app.js');

const CarouselItem = sequelize.define('CarouselItem', {
    CarouselItem_id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: Sequelize.DataTypes.STRING,
    description: Sequelize.DataTypes.TEXT
},
{
    freezeTableName: true,
    timestamps: false
})

module.exports = CarouselItem;