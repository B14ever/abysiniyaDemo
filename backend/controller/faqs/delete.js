const Faq = require('../../models/faqs');

const deleteFaqById = async (req, res) => {
    try {
      const faq = await Faq.findOneAndDelete({ id: req.params.id });
  
      if (!faq) {
        return res.status(404).json({
          message: 'FAQ not found'
        });
      }
  
      res.status(200).json({
        message: 'FAQ deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error deleting FAQ',
        error
      });
    }
  };
  module.exports = {deleteFaqById};