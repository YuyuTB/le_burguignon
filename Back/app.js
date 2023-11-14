const express = require('express');
const bodyParser = require('body-parser');
const carouselRoutes = require('./routes/carouselRoutes');
const { Sequelize } = require('sequelize');
const multer = require('multer');
const path = require('path');
const app = express();

const cors = require('cors');
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

// Middleware pour analyser le corps des requêtes au format JSON
app.use(bodyParser.json());

// Utiliser le fichier de configuration Sequelize
const sequelizeConfig = require('./config/config.json')[
	process.env.NODE_ENV || 'development'
];
const sequelize = new Sequelize(sequelizeConfig);

// Vérifier la connexion à la base de données
sequelize
	.authenticate()
	.then(() => {
		console.log(
			'Connection to the database has been established successfully.'
		);
	})
	.catch((error) => {
		console.error('Unable to connect to the database:', error);
	});

// Définir le modèle Carousel et synchroniser avec la base de données
const { carouselitem } = require('./models');
carouselitem.sync();

// Utilisation des routes définies dans taskRoutes
app.get('/api/carouselitem', (req, res) => {
	res.send('Ceci est la route /api/carouselitem');
});

// Gérer les erreurs 404 (Not Found)
app.use((req, res) => {
	res.status(404).send(`Ressource not found ${req.originalUrl}`);
});

// Gérer les erreurs 500 (Internal Server Error)
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ error: 'Internal Server Error' });
});

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'images');
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname +
				'-' +
				uniqueSuffix +
				path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });
// Exemple de route pour le téléchargement d'images
app.post('/upload', upload.single('image'), (req, res) => {
	// À ce stade, le fichier a été téléchargé et stocké dans le dossier 'images/carousel'
	// Vous pouvez maintenant renvoyer une réponse ou effectuer d'autres actions nécessaires
	res.status(200).json({ message: "Téléchargement d'image réussi." });
});
