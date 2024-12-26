const Product = require('../models/Product'); 

const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        throw error;
    }
};

// Implement other service methods (getById, create, update, delete)

module.exports = { getAllProducts, /* ... other methods */ };
