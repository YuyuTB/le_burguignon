const express = require('express');
const router = express.Router();
const itemController = require('../controllers/snack_controller');
const { upload } = require('../utils/imgUpload');

router.get('/snack', itemController.getAllItems);
router.get('/snack/:Snack_id', itemController.getItemById);
router.put(
	'/snack/upload/:Snack_id',
	upload.single('selectedImage'),
	itemController.updateItem
);

router.delete('/snack/:Snack_id', itemController.deleteItem);

router.post(
	'/snack/upload',
	upload.single('selectedImage'),
	itemController.createItem
);

module.exports = router;
