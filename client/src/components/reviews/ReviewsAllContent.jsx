import React from 'react';
import axios from 'axios';

import StarsRating from './StarRating.jsx';
import RatingDistribution from './RatingDistribution.jsx';
import Pros from './Pros.jsx';
import Cons from './Cons.jsx';
import StatsRecommendation from './StatsRecommendation.jsx';
import SeeAllReviewsButton from './SeeAllReviews.jsx';
import ControlBar from './ControlBar.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewsPageBar from './ReviewsPageBar.jsx';

class ReviewsAllContent extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
      start: 0,
      end: 6
    };
    //bind your stuff!!!
    this.getReviews = this.getReviews.bind(this);
    this.getReviewsMostHelpful = this.getReviewsMostHelpful.bind(this);
    this.getReviewsHighestRatings = this.getReviewsHighestRatings.bind(this);
    this.sortMostRelevant = this.sortMostRelevant.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/bechampions/products/reviews/')
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getReviewsMostHelpful() {
    axios.get('/api/bechampions/products/reviews/sortMostHelpful')
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getReviewsHighestRatings() {
    axios.get('/api/bechampions/products/reviews/sortHighestRatings')
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  sortMostRelevant() {
    axios.get('/api/bechampions/products/reviews/sortMostRelevant')
    .then((response) => {
      this.setState({
        reviews: response.data
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  nextPage() {
    this.setState((state) => ({
      start: state.start + 6,
      end: state.end + 6
    }));
  }

  previousPage() {
    this.setState((state) => ({
      start: state.start - 6,
      end: state.end - 6
    }));
  }

  render () {
    let { reviews, start, end } = this.state;
    let displayReviews = reviews.slice(start, end);

    return (
      <div className="reviews_all_content">
        <div className="review_highlights_container">
          <div className="left_ratings_container">
            <StarsRating reviews={reviews}/>
            <RatingDistribution />
            <StatsRecommendation reviews={reviews}/>
          </div>
          <div className="pros_and_cons_container">
            <Pros />
            <Cons />
          </div>
        </div>
        <div className="reviews_action_bar_container">
            <div className="reviews_action_header">REVIEWS</div>
            <div className="write_review_container">
              <button className="write_review_button">WRITE A REVIEW</button>
            </div>
        </div>
        <div className="filter_control_bar_container">
          <ControlBar sortMethods={[this.getReviews, this.getReviewsHighestRatings, this.getReviewsMostHelpful, this.sortMostRelevant]} reviewsCount={[reviews.length, start + 1, end]}/>
        </div>
        <ReviewList reviews={displayReviews} getReviews={this.getReviews}/>
        <ReviewsPageBar nextPage={this.nextPage} previousPage={this.previousPage} reviewsCount={[reviews.length, start + 1, end]}/>
      </div>
    )
  }
}

export default ReviewsAllContent;