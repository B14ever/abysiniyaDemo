const Faq = require('../../models/faqs');
const getAllFaqs = async (req, res) => {
    try {
      const faqs = await Faq.find();
      res.status(200).json(faqs);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching FAQs',
        error
      });
    }
  };
  const getFaqById = async (req, res) => {
    try {
      const faq = await Faq.findOne({ id: req.params.id });
  
      if (!faq) {
        return res.status(404).json({
          message: 'FAQ not found'
        });
      }
  
      res.status(200).json(faq);
    } catch (error) {
      res.status(500).json({
        message: 'Error fetching FAQ',
        error
      });
    }
  };
  module.exports = { getAllFaqs,getFaqById};