const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/', (req, res) => {
    const product = Product.getRandomProduct();
    res.render('product', {product});
});

router.post('/addToCart', (req, res) => {
    Product.addToCart(req.body.id);
    res.redirect(303, '/cart');
});

router.get('/cart', (req, res) => {
    const cart = Product.getCart();
    const totalPrice = cart.map(order => order.product.price * order.qty).reduce((a, b) => a + b, 0);
    res.render('shoppingCart', {cart, totalPrice: totalPrice.toFixed(2)});
});

module.exports = router;
