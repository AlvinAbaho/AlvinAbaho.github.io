const express = require('express');
const controller = require('../controllers/product');

const router = express.Router();

router.get('/', controller.getRandomProduct);

module.exports = router;
