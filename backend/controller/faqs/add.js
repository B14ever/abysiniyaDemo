const Faq = require('../../models/faqs');

const createFaq = async (req, res) => {
    const { id, question, answer } = req.body;
  
    try {
      const newFaq = new Faq({ id, question, answer });
      await newFaq.save();
      res.status(201).json(newFaq);
    } catch (error) {
      res.status(400).json({
        message: 'Error creating FAQ',
        error
      });
    }
  };
  module.exports = {createFaq};