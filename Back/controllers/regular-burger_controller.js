const Item = require('../models/regular-burger');
const fs = require('fs');
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
		const RegularBurger_id = req.params.RegularBurger_id;

		try {
			const item = await Item.findByPk(RegularBurger_id);

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
			await uploadImageAndAssociateWithModel(
				req,
				res,
				null,
				Item,
				'RegularBurger_id'
			);
		} catch (error) {
			console.error(error);
			res.status(500).send(
				"Erreur lors de la création d'un nouvel item."
			);
		}
	},

	updateItem: async (req, res) => {
		const RegularBurger_id = req.params.RegularBurger_id;
		try {
			const existingItem = await Item.findByPk(RegularBurger_id);
			await uploadUpdate(
				req,
				res,
				existingItem,
				Item,
				'RegularBurger_id'
			);
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la mise à jour de l'item avec l'ID ${RegularBurger_id}.`
			);
		}
	},

	deleteItem: async (req, res) => {
		const RegularBurger_id = req.params.RegularBurger_id;
		try {
			const existingItem = await Item.findByPk(RegularBurger_id);
			const filename = existingItem.imgUrl
				? existingItem.imgUrl.split('/images/')[1]
				: null;
			fs.unlink('images/' + filename, () => {
				Item.destroy({ where: { RegularBurger_id } })
					.then(() => {
						res.status(200).json({ message: 'Deleted object' });
					})
					.catch((error) => res.status(401).json({ error }));
			});
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la suppression de l'item avec l'ID ${RegularBurger_id}.`
			);
		}
	},
};

module.exports = itemController;
