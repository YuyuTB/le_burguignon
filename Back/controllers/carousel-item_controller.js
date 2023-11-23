const Item = require('../models/carousel-item');
const {
	uploadImageAndAssociateWithModel,
	uploadUpdate,
} = require('../utils/imgUpload'); // ajustez le chemin selon votre structure de projet

const itemController = {
	getAllItems: async (req, res) => {
		try {
			const items = await Item.findAll();
			res.json(items);
		} catch (error) {
			console.error(error);
			res.status(500).send('Erreur lors de la récupération des items.');
		}
	},

	getItemById: async (req, res) => {
		const CarouselItem_id = req.params.CarouselItem_id;

		try {
			const item = await Item.findByPk(CarouselItem_id);

			if (item) {
				res.json(item);
			} else {
				res.status(404).send("L'élément demandé n'a pas été trouvé.");
			}
		} catch (error) {
			console.error(error);
			res.status(500).send(
				"Erreur lors de la récupération de l'élément."
			);
		}
	},

	createItem: async (req, res) => {
		try {
			await uploadImageAndAssociateWithModel(req, res, null, Item);
		} catch (error) {
			console.error(error);
			res.status(500).send(
				"Erreur lors de la création d'un nouvel item."
			);
		}
	},

	updateItem: async (req, res) => {
		const CarouselItem_id = req.params.CarouselItem_id;
		try {
			const existingItem = await Item.findByPk(CarouselItem_id);
			await uploadUpdate(req, res, existingItem, Item);
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la mise à jour de l'item avec l'ID ${CarouselItem_id}.`
			);
		}
	},

	deleteItem: async (req, res) => {
		const CarouselItem_id = req.params.CarouselItem_id;
		try {
			await Item.destroy({ where: { CarouselItem_id } });
			res.status(204).end(); // Respond with a status code 204 (No Content)
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la suppression de l'item avec l'ID ${CarouselItem_id}.`
			);
		}
	},
};

module.exports = itemController;
