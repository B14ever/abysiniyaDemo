
const Product = require('../../models/product');

const createProduct = async (req, res) => {
  const { id, title, description, image, pricing, features } = req.body;

  try {
    const newProduct = new Product({ id, title, description, image, pricing, features });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: 'Error creating product', error });
  }
};

module.exports = createProduct;
