const productCatalog = [
    {
        name: "2020 Apple MacBook Pro",
        description: " Intel Processor (13-inch, 16GB RAM, 512GB SSD Storage) - Silver",
        category: "Laptops",
        price: 1799.0,
        image: "https://images-na.ssl-images-amazon.com/images/I/71ppucPX3wL._AC_SX679_.jpg",
        id: 0
    },
    {
        name: "Amazon Basics 8K DisplayPort",
        description: "1.4 Cable with 4K@120Hz, 8K@60Hz Video Resolution and HDR Support - 3 Feet",
        category: "Computer Accessories",
        price: 9.0,
        image: "https://images-na.ssl-images-amazon.com/images/I/71ZXhNMRaTL._AC_SX679_.jpg",
        id: 1
    }, {
        name: "Echo (4th Gen) ",
        description: "With premium sound, smart home hub, and Alexa | Charcoal",
        category: "Smart-Home Products",
        price: 99.99,
        image: "https://images-na.ssl-images-amazon.com/images/I/71JB6hM6Z6L._AC_SX679_.jpg",
        id: 2
    }
];

let nextAvailableIndex = productCatalog.length;

module.exports = class Product {
    constructor(name, description, category, price) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.id = nextAvailableIndex;
        productCatalog.push(this); // add new Product to Catalog
    }

    static getAllProducts() {
        return productCatalog;
    }

    static getRandomProduct() {
        return productCatalog[Math.floor(Math.random() * productCatalog.length)];
    }

    static getProductById(id) {
        return productCatalog[id];
    }
}