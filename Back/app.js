const https = require('https');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/sequelize');
const carouselRoutes = require('./routes/carouselRoutes');
const cors = require('cors');
const path = require('path');
const authController = require('./controllers/login_controller');
const contactRoutes = require('./routes/contactRoutes');
const regularRoutes = require('./routes/regularRoutes');
const snackRoutes = require('./routes/snackRoutes');
const temporaryRoutes = require('./routes/temporaryRoutes');
const drinkRoutes = require('./routes/drinkRoutes');
const dessertRoutes = require('./routes/dessertRoutes');

const app = express();
const corsOptions = {
	origin: ['https://burguignon.fr', 'https://www.burguignon.fr'],
	optionsSuccessStatus: 204,
};
const angularDistPath = path.join(__dirname, '../dist/front');

app.use(express.static(angularDistPath));

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});

app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(bodyParser.json({ limit: '500mb' }));
app.use(cors(corsOptions));

app.post('/api/login', authController.login);
app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/api', carouselRoutes);
app.use('/api', contactRoutes);
app.use('/api', regularRoutes);
app.use('/api', snackRoutes);
app.use('/api', temporaryRoutes);
app.use('/api', drinkRoutes);
app.use('/api', dessertRoutes);

app.get('*', (req, res) => {
	res.sendFile(path.join(angularDistPath, 'index.html'));
});

// Configuration des options HTTPS
const httpsOptions = {
	key: fs.readFileSync('/etc/letsencrypt/live/burguignon.fr/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/burguignon.fr/fullchain.pem'),
};

// Création du serveur HTTPS
https.createServer(httpsOptions, app).listen(8443, () => {
	console.log('Server is running on port 8443');
});
