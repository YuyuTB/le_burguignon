const bodyParser = require('body-parser');
const express = require('express');
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
const PORT = process.env.PORT || 3000;
const corsOptions = {
	origin: 'http://localhost:4200', // Update this with your Angular app's origin
	optionsSuccessStatus: 204,
};

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch((error) => {
		console.error('Unable to connect to the database: ', error);
	});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

app.listen(PORT, () => {
	console.log('Server is running on port 3000');
});
