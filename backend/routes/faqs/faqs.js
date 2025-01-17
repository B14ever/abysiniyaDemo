const express = require('express');
const router = express.Router();
const {createFaq} = require('../../controller/faqs/add');
const {getAllFaqs,getFaqById} = require('../../controller/faqs/get');
const {updateFaqById} = require('../../controller/faqs/edit');
const {deleteFaqById} = require('../../controller/faqs/delete');
router.get('/', getAllFaqs);
router.post('/create', createFaq);
router.get('/:id', getFaqById);
router.put('/update/:id', updateFaqById);
router.delete('/delete/:id', deleteFaqById);
module.exports = router;
