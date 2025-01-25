// const APIFeatures = require('../utils/apiFeatures');
const Question = require('../models/questionModel');
// const catchAsync = require('../utils/catchAsync');
const factory = require('./handleFactory');

exports.getAllQuestions = factory.getAll(Question);
exports.getQuesion = factory.getOne(Question);
exports.updateQuestion = factory.updateOne(Question);
exports.deleteQuestion = factory.deleteOne(Question);
