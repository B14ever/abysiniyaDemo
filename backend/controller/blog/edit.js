
const Blog = require('../../models/blog');

const updateBlogById = async (req, res) => {
  const { title, description, date, category } = req.body;

  try {
    const blog = await Blog.findOneAndUpdate(
      { id: req.params.id },
      { title, description, date, category },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error });
  }
};

module.exports = updateBlogById;
