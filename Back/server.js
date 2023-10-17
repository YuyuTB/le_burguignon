const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nom-de-votre-base-de-donnees', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
