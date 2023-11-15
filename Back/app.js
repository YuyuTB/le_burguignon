const bodyParser = require('body-parser');
const carouselRoutes = require('./routes/carouselRoutes');
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

app.get('/', (req, res) => {
	res.send('Bienvenue sur le serveur !'); // ou renvoie le contenu souhaité
});
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

// Utilisation des routes définies dans taskRoutes
app.get('/api/carouselitems', (req, res) => {
	const carouselItems = ['test', 'test1', 'test2', 'test3'];
	res.send(carouselItems);
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
			file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage });
// Exemple de route pour le téléchargement d'images
app.post('/api/carouselitems/upload', upload.single('image'), (req, res) => {
	// Logique pour gérer le fichier téléchargé
	res.status(200).json({ message: "Téléchargement d'image réussi." });
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
