const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  subj: {
    type: String,
    required: [true, 'Questions must have a Subject'],
    trim: true,
  },
  question: {
    type: String,
    required: [true, 'Document must have a Question'],
    trim: true,
    unique: true,
  },
  choices: [String],
  answer: {
    type: String,
    trim: true,
    required: [true, 'Question must have answer'],
    uppercase: true,
  },
});
questionSchema.index({ subj: -1 });

questionSchema.pre('save', async function (next) {
  if (!this.isNew) return next();
  const lastQuestion = await this.constructor.findOne().sort({ id: -1 });
  this.id = lastQuestion ? lastQuestion.id + 1 : 1;
  next();
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
