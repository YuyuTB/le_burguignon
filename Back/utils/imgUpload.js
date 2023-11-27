const multer = require('multer');
const { v4: uuidv4 } = require('uuid'); // Importe la fonction v4 d'UUID

const MIME_TYPES = {
	'image/jpg': 'jpg',
	'image/jpeg': 'jpg',
	'image/png': 'png',
};

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, 'images');
	},
	filename: (req, file, callback) => {
		const extension = MIME_TYPES[file.mimetype];
		const uniqueId = uuidv4();
		callback(null, uniqueId + '.' + extension);
	},
});

const upload = multer({ storage: storage });

async function uploadImageAndAssociateWithModel(
	req,
	res,
	next,
	Model,
	identifierField
) {
	try {
		if (!req.file) {
			console.log('Aucun fichier téléchargé.');
			return res.status(400).send('Aucun fichier téléchargé.');
		}

		const { description } = req.body;

		const newItem = await Model.create({ description });

		const imageUrl = `http://localhost:3000/images/${req.file.filename}`;

		const updateObject = {};
		updateObject['imgUrl'] = imageUrl;
		updateObject[identifierField] = newItem[identifierField];

		if (req.body.name !== null && req.body.name !== undefined) {
			updateObject['name'] = req.body.name;
		}

		await Model.update(updateObject, {
			where: { [identifierField]: newItem[identifierField] },
		});
		res.json({ message: 'Téléchargement réussi.' });
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur lors du téléchargement de l'image.");
	}
}

async function uploadUpdate(req, res, next, Model, identifierField) {
	try {
		if (!req.file) {
			// Gérez ici le cas où aucune nouvelle image n'est téléchargée
			console.log('Aucun fichier téléchargé.');
			const { description } = req.body;
			const updateObject = { description };
			if (req.body.name !== null && req.body.name !== undefined) {
				updateObject['name'] = req.body.name;
			}

			await Model.update(updateObject, {
				where: { [identifierField]: req.params[identifierField] },
			});

			return res.json({
				message: "Mise à jour réussie sans changement d'image.",
			});
		}

		const { description } = req.body;

		const existingItem = await Model.findOne({
			where: { [identifierField]: req.params[identifierField] },
		});

		if (!existingItem) {
			return res
				.status(404)
				.send("L'élément à mettre à jour n'a pas été trouvé.");
		}

		const imageUrl = `http://localhost:3000/images/${req.file.filename}`;
		const updateObject = {
			imgUrl: imageUrl,
			description: description,
		};
		if (req.body.name !== null && req.body.name !== undefined) {
			updateObject['name'] = req.body.name;
		}

		await Model.update(updateObject, {
			where: { [identifierField]: req.params[identifierField] },
		});

		res.json({ message: "Mise à jour réussie avec changement d'image." });
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur lors de la mise à jour de l'image.");
	}
}

module.exports = { upload, uploadImageAndAssociateWithModel, uploadUpdate };
