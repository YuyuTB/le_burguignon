const multer = require('multer');

const storage = multer.diskStorage({
	destination: './images',
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage: storage });

async function uploadImageAndAssociateWithModel(req, res, next, Model) {
	try {
		if (!req.file) {
			console.log('Aucun fichier téléchargé.');
			return res.status(400).send('Aucun fichier téléchargé.');
		}

		const { description } = req.body;
		console.log('Description:', description);

		const newItem = await Model.create({ description });
		console.log('Nouvel élément créé:', newItem);

		const imageUrl = `http://localhost:3000/images/${req.file.originalname}`;
		console.log("URL de l'image:", imageUrl);
		console.log('Received file:', req.file);

		await Model.update(
			{ imgUrl: imageUrl },
			{ where: { CarouselItem_id: newItem.CarouselItem_id } }
		);
		console.log('Mise à jour réussie.');
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur lors du téléchargement de l'image.");
	}
}

async function uploadUpdate(req, res, next, Model) {
	try {
		if (!req.file) {
			console.log('Aucun fichier téléchargé.');
			return res.status(400).send('Aucun fichier téléchargé.');
		}

		const { description } = req.body;
		const CarouselItem_id = req.params.CarouselItem_id;

		const existingItem = await Model.findByPk(CarouselItem_id);

		if (!existingItem) {
			return res
				.status(404)
				.send("L'élément à mettre à jour n'a pas été trouvé.");
		}

		const imageUrl = `http://localhost:3000/images/${req.file.originalname}`;
		console.log("URL de l'image:", imageUrl);
		console.log('Received file:', req.file);

		await Model.update(
			{ imgUrl: imageUrl, description: description },
			{ where: { CarouselItem_id: existingItem.CarouselItem_id } }
		);

		console.log('Mise à jour réussie.');
		res.json({ message: 'Mise à jour réussie.' });
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur lors de la mise à jour de l'image.");
	}
}

module.exports = { upload, uploadImageAndAssociateWithModel, uploadUpdate };
