const express = require('express');
const router = express.Router();
const carouselController = require('../controllers/carousel-item_controller.js');

router.post('/carousel', carouselController.create);

module.exports = router;
