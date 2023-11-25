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
			console.log('Aucun fichier téléchargé.');
			return res.status(400).send('Aucun fichier téléchargé.');
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
		const updateObject = {};
		updateObject['imgUrl'] = imageUrl;
		updateObject['description'] = description;

		await Model.update(updateObject, {
			where: { [identifierField]: req.params[identifierField] },
		});

		res.json({ message: 'Mise à jour réussie.' });
	} catch (error) {
		console.error(error);
		res.status(500).send("Erreur lors de la mise à jour de l'image.");
	}
}

module.exports = { upload, uploadImageAndAssociateWithModel, uploadUpdate };
