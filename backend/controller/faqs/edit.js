const Faq = require('../../models/faqs');



const updateFaqById = async (req, res) => {
  const { question, answer } = req.body;

  try {
    const faq = await Faq.findOneAndUpdate(
      { id: req.params.id },
      { question, answer },
      { new: true, runValidators: true }
    );

    if (!faq) {
      return res.status(404).json({
        message: 'FAQ not found'
      });
    }

    res.status(200).json(faq);
  } catch (error) {
    res.status(400).json({
      message: 'Error updating FAQ',
      error
    });
  }
};

module.exports = { updateFaqById};
