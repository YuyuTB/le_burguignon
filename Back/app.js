const bodyParser = require('body-parser');
const express = require('express');
const sequelize = require('./config/sequelize');
const carouselRoutes = require('./routes/carouselRoutes');
const cors = require('cors');
const path = require('path');

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

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use('/images', express.static(path.join(__dirname, './images')));
app.use('/api', carouselRoutes);

app.listen(PORT, () => {
	console.log('Server is running on port 3000');
});
