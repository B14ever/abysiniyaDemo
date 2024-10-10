const Product = require('../../models/product');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching products',
      error,
    });
  }
};

// Get product by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    if (!product) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching product',
      error,
    });
  }
};

module.exports = { getAllProducts, getProductById };
