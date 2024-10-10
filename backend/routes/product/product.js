// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const {getAllProducts ,getProductById} = require('../../controller/product/get');  // Combined controller
const createProduct = require('../../controller/product/add');
const updateProductById = require('../../controller/product/edit');
const deleteProductById = require('../../controller/product/delete');

// Routes
router.get('/', getAllProducts );        
router.get('/:id', getProductById);    
router.post('/create', createProduct);     
router.put('/update/:id', updateProductById);  
router.delete('/delete/:id', deleteProductById); 

module.exports = router;
