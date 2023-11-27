const express = require('express');
const router = express.Router();
const itemController = require('../controllers/drink_controller');
const { upload } = require('../utils/imgUpload');

router.get('/drink', itemController.getAllItems);
router.get('/drink/:Drink_id', itemController.getItemById);
router.put(
	'/drink/upload/:Drink_id',
	upload.single('selectedImage'),
	itemController.updateItem
);

router.delete('/drink/:Drink_id', itemController.deleteItem);

router.post(
	'/drink/upload',
	upload.single('selectedImage'),
	itemController.createItem
);

module.exports = router;
