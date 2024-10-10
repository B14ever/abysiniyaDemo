
const Blog = require('../../models/blog');

const createBlog = async (req, res) => {
  const { id, title, description, date, category } = req.body;

  try {
    const newBlog = new Blog({ id, title, description, date, category });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog', error });
  }
};

module.exports = createBlog;
