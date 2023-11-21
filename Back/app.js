const bodyParser = require('body-parser');
const express = require('express');
const sequelize = require('./config/sequelize');
const carouselRoutes = require('./routes/carouselRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
	origin: 'http://localhost:4200', // Update this with your Angular app's origin
	optionsSuccessStatus: 200,
};
app.use(bodyParser.json());
app.use(cors(corsOptions));

sequelize
	.sync({ force: false })
	.then(() => {
		console.log('Base de données synchronisée');
	})
	.catch((error) => {
		console.error(
			'Erreur lors de la synchronisation de la base de données:',
			error
		);
	});

app.use('/api', carouselRoutes);

app.listen(PORT, () => {
	console.log('Server is running on port 3000');
});
