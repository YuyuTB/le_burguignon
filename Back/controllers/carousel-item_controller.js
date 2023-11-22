const Item = require('../models/carousel-item');
const { uploadImageAndAssociateWithModel } = require('../utils/imgUpload'); // ajustez le chemin selon votre structure de projet

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
		const CarouselItem_id = req.params.itemId;
		try {
			const existingItem = await Item.findByPk(CarouselItem_id);
			if (req.file && req.file.originalname !== existingItem.imgUrl) {
				await uploadImageAndAssociateWithModel(req, res, null, Item);
			}
			const updatedItem = await Item.update(req.body, {
				where: { CarouselItem_id },
			});
			res.json(updatedItem);
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la mise à jour de l'item avec l'ID ${CarouselItem_id}.`
			);
		}
	},

	deleteItem: async (req, res) => {
		const CarouselItem_id = req.params.itemId;
		try {
			await Item.destroy({ where: { CarouselItem_id } });
			res.send('Item supprimé avec succès.');
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la suppression de l'item avec l'ID ${CarouselItem_id}.`
			);
		}
	},
};

module.exports = itemController;
