const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const Sequelize = require('sequelize');

const config = require('./config/config.json')[
	process.env.NODE_ENV || 'development'
];

const sequelize = new Sequelize(
	config.database,
	config.username,
	config.password,
	config
);
module.exports = sequelize;

const carousel = require('./models/carousel-item.js');
const contact = require('./models/contact.js');
const dessert = require('./models/dessert.js');
const drink = require('./models/drink.js');
const regular = require('./models/regular-burger.js');
const snack = require('./models/snack.js');
const temporary = require('./models/temporary-burger.js');

const app = express();
const corsOptions = {
	origin: 'http://localhost:4200', // Update this with your Angular app's origin
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
