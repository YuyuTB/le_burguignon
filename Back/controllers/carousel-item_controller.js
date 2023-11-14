const { CarouselItem } = require('../models');

module.exports = {
	async create(req, res) {
		try {
			const carousel = await CarouselItem.create(req.body);
			res.status(201).json(carousel);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	},

	// Implement other CRUD operations (read, update, delete) similarly
};
