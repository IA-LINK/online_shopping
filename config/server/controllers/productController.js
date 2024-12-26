const productService = require('../../services/productService'); 

const getProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' }); 
    }
};

// Implement other controller methods (getById, create, update, delete) 
// using productService

module.exports = { getProducts, /* ... other methods */ };
