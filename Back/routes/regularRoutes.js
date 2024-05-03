const express = require('express');
const router = express.Router();
const itemController = require('../controllers/regular-burger_controller');
const { upload } = require('../utils/imgUpload');

router.get('/regular', itemController.getAllItems);
router.get('/regular/:RegularBurger_id', itemController.getItemById);
router.put(
	'/regular/upload/:RegularBurger_id',
	upload.single('selectedImage'),
	itemController.updateItem
);

router.delete('/regular/:RegularBurger_id', itemController.deleteItem);

router.post(
	'/regular/upload',
	upload.single('selectedImage'),
	itemController.createItem
);

module.exports = router;
