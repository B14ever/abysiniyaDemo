const Product = require('../../models/product');

const updateProductById = async (req, res) => {
  const { title, description, image, pricing, features } = req.body;

  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      { title, description, image, pricing, features },
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Error updating product', error });
  }
};

module.exports = updateProductById;
