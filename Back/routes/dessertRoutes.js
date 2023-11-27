const express = require('express');
const router = express.Router();
const itemController = require('../controllers/dessert_controller');
const { upload } = require('../utils/imgUpload');

router.get('/dessert', itemController.getAllItems);
router.get('/dessert/:Dessert_id', itemController.getItemById);
router.put(
	'/dessert/upload/:Dessert_id',
	upload.single('selectedImage'),
	itemController.updateItem
);

router.delete('/dessert/:Dessert_id', itemController.deleteItem);

router.post(
	'/dessert/upload',
	upload.single('selectedImage'),
	itemController.createItem
);

module.exports = router;
