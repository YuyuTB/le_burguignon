const CarouselItem = require('../models/carousel-item');
const db = require('../config/sequelize');

async function getAllCarouselItems(req, res) {
	try {
		const carouselItems = await db.CarouselItem.findAll();
		res.json(carouselItems);
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Erreur Serveur' });
	}
}

module.exports = { getAllCarouselItems };
