// routes/blogRoutes.js

const express = require('express');
const router = express.Router();
const {getAllBlogs,getBlogById} = require('../../controller/blog/get');
const createBlog = require('../../controller/blog/add');
const updateBlogById = require('../../controller/blog/edit');
const deleteBlogById = require('../../controller/blog/delete');

// Routes
router.get('/', getAllBlogs);
router.post('/create', createBlog);
router.get('/:id', getBlogById);
router.put('/update/:id', updateBlogById);
router.delete('/delete/:id', deleteBlogById);

module.exports = router;
