const express = require('express');
const router = express.Router();
const itemController = require('../controllers/temporary-burger_controller');
const { upload } = require('../utils/imgUpload');

router.get('/temporary', itemController.getAllItems);
router.get('/temporary/:TemporaryBurger_id', itemController.getItemById);
router.put(
	'/temporary/upload/:TemporaryBurger_id',
	upload.single('selectedImage'),
	itemController.updateItem
);

router.delete('/temporary/:TemporaryBurger_id', itemController.deleteItem);

router.post(
	'/temporary/upload',
	upload.single('selectedImage'),
	itemController.createItem
);

module.exports = router;
