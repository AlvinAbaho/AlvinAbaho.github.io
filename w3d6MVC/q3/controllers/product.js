const Product = require('../models/product');

module.exports = {
    getRandomProduct: (req, res) => {
        const product = Product.getRandomProduct();
        res.render('product', {product});
    }
};
