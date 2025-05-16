const express = require('express');
const questionController = require('../controllers/questionController');
const authController = require('../controllers/authController');

const router = express.Router();

// router.use(authController.protect);

router.route('/').get(questionController.getAllQuestions);
router
  .route('/:id')
  .get(questionController.getQuesion)
  .patch(
    authController.restrictTo('mod', 'admin'),
    questionController.updateQuestion,
  )
  .delete(
    authController.restrictTo('mod', 'admin'),
    questionController.deleteQuestion,
  );

module.exports = router;
