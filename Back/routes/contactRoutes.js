const express = require('express');
const router = express.Router();
const itemController = require('../controllers/contact_controller');

router.get('/contact', itemController.getAllItems);
router.get('/contact/:Contact_id', itemController.getItemById);

router.delete('/contact/:Contact_id', itemController.deleteItem);

router.post('/contact', itemController.createItem);

module.exports = router;
