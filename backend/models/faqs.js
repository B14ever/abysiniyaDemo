const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Faq = mongoose.model('Faq', faqSchema);

module.exports = Faq;
