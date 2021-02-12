//require('newrelic');
const express = require('express');
const path = require('path');
// const dbHelpers = require('../database/index.js');
const pool = require('../database/postgresIndex.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

const port = 3040;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening at port ${port}`);
});

// retrieving all reviews for the specific product (default by most recent)
app.get('/loaderio-8e608cc6f51f24d5e584c4e0e8f4a872', (req, res) => {
	res.status(200).send('loaderio-8e608cc6f51f24d5e584c4e0e8f4a872');
});

app.get('/api/bechampions/products/reviews/', (req, res) => {
  // dbHelpers.Review.find({ productId: req.params.productId }).sort({createdAt: 'asc'})
  //   .then((reviews) => {
  //     res.status(200).send(reviews);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });

  try {
	  var num = Math.floor(Math.random() * 10000000) + 1;
	  pool.query(`select * from reviews WHERE id > ${num} limit 10`)
    		.then((results) => { res.status(200).send(results.rows); })
	  	.catch((err) => { res.status(400).send(err); })
      } catch(err) {
		res.status(400).send(err);
	}

});

// retrieving all reviews for the specific product (highest rating to lowest)
app.get('/api/bechampions/products/reviews/sortHighestRatings', (req, res) => {
  // dbHelpers.Review.find({ productId: req.params.productId }).sort({stars: 'desc'})
  //   .then((reviews) => {
  //     res.status(200).send(reviews);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
  pool.query('select * from reviews order by stars desc limit 10;')
    .then((results) => { res.status(200).send(results.rows); })
    .catch((err) => { res.status(400).send(err); })
});

// retrieving all reviews for the specific product (most helpful)
app.get('/api/bechampions/products/reviews/sortMostHelpful', (req, res) => {
  // dbHelpers.Review.find({ productId: req.params.productId }).sort({yes: 'desc'})
  //   .then((reviews) => {
  //     res.status(200).send(reviews);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
  pool.query('SELECT * FROM reviews ORDER BY _yes desc limit 10;')
    .then((results) => { res.status(200).send(results.rows); })
    .catch((err) => { res.status(400).send(err); })
});

// retrieving all reviews (most relevant)
app.get('/api/bechampions/products/reviews/sortMostRelevant', (req, res) => {
  // dbHelpers.Review.find({ productId: req.params.productId }).sort({yes: 'desc', createdAt: 'asc'})
  //   .then((reviews) => {
  //     res.status(200).send(reviews);
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
  pool.query('SELECT * FROM reviews ORDER BY createdat asc, _yes desc limit 10;')
    .then((results) => { res.status(200).send(results.rows); })
    .catch((err) => { res.status(400).send(err); })
});

// voting yes for a review being helpful
app.put('/api/reviews/:id/yes', (req, res) => {
  // dbHelpers.Review.update({ _id: req.params._id }, { $inc: { yes: 1 } })
  //   .then(() => {
  //     res.status(200).send('Updated selected review');
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
  pool.query(`UPDATE reviews SET _yes = _yes + 1 WHERE id = ${req.params.id}`)
    .then((results) => { res.status(200).send(results.rows); })
    .catch((err) => { res.status(400).send(err); })
});

// voting no for a review not being helpful
app.put('/api/reviews/:id/no', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  // dbHelpers.Review.update({ _id: req.params._id }, { $inc: { no: 1 } })
  //   .then(() => {
  //     res.status(200).send('Updated selected review');
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
  pool.query('UPDATE reviews SET _no = _no + 1 WHERE id = req.params.id')
    .then((results) => { res.status(200).send(results.rows); })
    .catch((err) => { res.status(400).send(err); })
});

// reporting a review
app.put('/api/reviews/:id/reported', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  // dbHelpers.Review.update({ _id: req.params._id }, { report: 'Reported' })
  //   .then(() => {
  //     res.status(200).send('Updated selected review');
  //   })
  //   .catch((err) => {
  //     res.status(404).send(err);
  //   });
  pool.query(`UPDATE reviews SET report = reported WHERE id = ${req.params.id}`)
    .then((results) => { res.status(200).send(results.rows); })
    .catch((err) => { res.status(400).send(err); })
});

// writing a review
app.post('/api/bechampions/products/reviews/writeReview', (req, res) => {
  const {
    title, description, stars, comfortLevel, fit, user, email,
  } = req.body;
  const review = {
    productId: req.params.productId, title, description, stars, comfortLevel, fit, user, email,
  };
  dbHelpers.Review.create(review)
    .then(() => {
      res.status(200).send('Added review!');
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

// -------- Questions APIs ------------- //

// get all questions
// app.get('/api/bechampions/products/:productId/questions/', (req, res) => {
//   dbHelpers.Question.find({ productId: req.params.productId })
//     .then((questions) => {
//       res.status(200).send(questions);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });

// // to vote yes on a helpful response
// app.put('/api/bechampions/products/:productId/questions/:_questionId/:_responseId/yes', (req, res) => {
//   dbHelpers.Question.updateOne({ '_id': req.params._questionId, 'response._id': req.params._responseId}, { $inc: {'response.$.yes': 1}})
//     .then((answer) => {
//       res.status(200).send(answer);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });

// // vote no on a response
// app.put('/api/bechampions/products/:productId/questions/:_questionId/:_responseId/no', (req, res) => {
//   dbHelpers.Question.updateOne({ '_id': req.params._questionId, 'response._id': req.params._responseId}, { $inc: {'response.$.no': 1}})
//     .then((answer) => {
//       res.status(200).send(answer);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });

// // report a response
// app.put('/api/bechampions/products/:productId/questions/:_questionId/:_responseId/report', (req, res) => {
//   dbHelpers.Question.updateOne({ '_id': req.params._questionId, 'response._id': req.params._responseId}, { 'response.$.report': 'Reported'})
//     .then((answer) => {
//       res.status(200).send(answer);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });
