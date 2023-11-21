const express = require('express');
const router = express.Router();
const carouselItemController = require('../controllers/carousel-item_controller');

router.get('/carousel', carouselItemController.getAllCarouselItems);

module.exports = router;
