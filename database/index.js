const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/champion_reviews', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('connected to champion_reviews mongodb!!!');
  });

const reviewSchema = new mongoose.Schema({
  productId: { type: Number },
  title: String,
  description: { type: String, required: true },
  stars: { type: Number, required: true },
  quality: { type: String },
  comfortLevel: { type: String },
  fit: { type: String },
  recommend: { type: String },
  createdAt: { type: Number },
  user: { type: String, required: true },
  email: { type: String, required: true },
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  report: { type: String, default: 'Report' },
});

const Review = mongoose.model('Review', reviewSchema);

const questionSchema = new mongoose.Schema({
  productId: Number,
  description: String,
  createdAt: Number,
  user: String,
  email: String,
  response: [{
    description: String,
    createdAt: Number,
    user: String,
    email: String,
    yes: {
      type: Number,
      default: 0,
    },
    no: {
      type: Number,
      default: 0,
    },
    report: {
      type: String,
      default: 'Report',
    },
  }],
  responseCount: Number,
});

const Question = mongoose.model('Question', questionSchema);

// const answerSchema = new mongoose.Schema({
//   description: String,
//   createdAt: Number,
//   user: String,
//   email: String,
//   yes: {
//     type: Number,
//     default: 0
//   },
//   no: {
//     type: Number,
//     default: 0,
//   },
//   report: {
//     type: String,
//     default: 'Report',
//   }
// })

// const Answer = mongoose.model('Answer', answerSchema);

module.exports.Review = Review;
module.exports.Question = Question;
// module.exports.Answer = Answer;
