const express = require('express');
const router = express.Router();
const itemController = require('../controllers/carousel-item_controller');
const {
	upload,
	uploadImageAndAssociateWithModel,
} = require('../utils/imgUpload');

router.get('/carousel', itemController.getAllItems);
router.get('/carousel/:CarouselItem_id', itemController.getItemById);
router.put(
	'/carousel/upload/:CarouselItem_id',
	upload.single('selectedImage'),
	itemController.updateItem
);

router.delete('/carousel/:CarouselItem_id', itemController.deleteItem);

router.post(
	'/carousel/upload',
	upload.single('selectedImage'),
	itemController.createItem
);

module.exports = router;
