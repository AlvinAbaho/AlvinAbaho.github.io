const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res) => {
    const product = Product.getRandomProduct();
    res.render('product', {product});
});

module.exports = router;
