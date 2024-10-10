
const Blog = require('../../models/blog');

const deleteBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({ id: req.params.id });

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error });
  }
};

module.exports = deleteBlogById;
