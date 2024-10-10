// models/productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  pricing: {
    type: Number,
    required: true,
  },
  features: {
    type: [String], // Array of strings
    required: true,
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
