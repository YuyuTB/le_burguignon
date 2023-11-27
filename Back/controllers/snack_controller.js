const Item = require('../models/snack');
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
		const Snack_id = req.params.Snack_id;

		try {
			const item = await Item.findByPk(Snack_id);

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
				'Snack_id'
			);
		} catch (error) {
			console.error(error);
			res.status(500).send(
				"Erreur lors de la création d'un nouvel item."
			);
		}
	},

	updateItem: async (req, res) => {
		const Snack_id = req.params.Snack_id;
		try {
			const existingItem = await Item.findByPk(Snack_id);
			await uploadUpdate(req, res, existingItem, Item, 'Snack_id');
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la mise à jour de l'item avec l'ID ${Snack_id}.`
			);
		}
	},

	deleteItem: async (req, res) => {
		const Snack_id = req.params.Snack_id;
		try {
			const existingItem = await Item.findByPk(Snack_id);
			const filename = existingItem.imgUrl
				? existingItem.imgUrl.split('/images/')[1]
				: null;
			fs.unlink('images/' + filename, () => {
				Item.destroy({ where: { Snack_id } })
					.then(() => {
						res.status(200).json({ message: 'Deleted object' });
					})
					.catch((error) => res.status(401).json({ error }));
			});
		} catch (error) {
			console.error(error);
			res.status(500).send(
				`Erreur lors de la suppression de l'item avec l'ID ${Snack_id}.`
			);
		}
	},
};

module.exports = itemController;
