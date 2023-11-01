const sequelize = require('../app.js');
const CarouselItem = require('../models/carousel-item.js');
const Contact = require('../models/Contact.js');
const Dessert = require('../models/Dessert.js');
const Drink = require('../models/Drink.js');
const RegularBurger = require('../models/regular-burger.js');
const Snack = require('../models/snack.js');
const TemporaryBurger = require('../models/temporary-burger.js');


sequelize.sync({force: true})