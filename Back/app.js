const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const multer = require('multer');
const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();
const corsOptions = {
	origin: 'http://localhost:4200', // Update this with your Angular app's origin
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware pour analyser le corps des requêtes au format JSON
app.use(bodyParser.json());

// Routes
app.get('/api/carousel/items', (req, res) => {
	// Logique pour récupérer tous les éléments de la base de données
	res.json(/* Résultat de la requête à la base de données */);
});

app.post('/api/carousel/items', (req, res) => {
	// Logique pour ajouter un nouvel élément à la base de données
	res.json(/* Résultat de la requête à la base de données */);
});

app.put('/api/carousel/items/:id', (req, res) => {
	const itemId = req.params.id;
	// Logique pour mettre à jour un élément dans la base de données
	res.json(/* Résultat de la requête à la base de données */);
});

app.delete('/api/carousel/items/:id', (req, res) => {
	const itemId = req.params.id;
	// Logique pour supprimer un élément de la base de données
	res.json(/* Résultat de la requête à la base de données */);
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'images');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix =
			Date.now() +
			'-' +
			Math.round(Math.random() * 1e9) +
			path.extname(file.originalname);
		cb(null, uniqueSuffix);
	},
});

const upload = multer({ storage: storage });
// Exemple de route pour le téléchargement d'images
app.post('/api/carousel/upload', upload.single('image'), (req, res) => {
	res.send('Image téléchargée avec succès.');
});
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
