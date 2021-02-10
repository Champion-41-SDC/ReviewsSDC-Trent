import React from 'react';
import axios from 'axios';

class RatingDistribution extends React.Component {
  constructor() {
    super();
    this.state = {
      reviews: []

    };
    this.getReviews = this.getReviews.bind(this);
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
      })
  }

  render() {
    let { reviews } = this.state;
    let fiveStarCount = 0;
    let fourStarCount = 0;
    let threeStarCount = 0;
    let twoStarCount = 0;
    let oneStarCount = 0;
    for (var i = 0; i < reviews.length; i++) {
      let eachReview = reviews[i];
      if (eachReview.stars === '4') {
        fiveStarCount += 1;
      } else if (eachReview.stars === '3') {
        fourStarCount += 1;
      } else if (eachReview.stars === '2') {
        threeStarCount += 1;
      } else if (eachReview.stars === '1') {
        twoStarCount += 1;
      } else {
        oneStarCount += 1;
      }
    }
    return (
      <div role="group" className="rating_distribution_container">
        <div className="rating_distribution_text_number_reviews_container">
          <span id="rating_distribution_text">Rating Distribution</span>
          <span id="number_reviews">({reviews.length} reviews)</span>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">5 star</div>
            <meter className="star_rating_meter" value={fiveStarCount} min="0" max={reviews.length}></meter>
            <div className="total_number_reviews_for_star_rating">{fiveStarCount}</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">4 star</div>
            <meter className="star_rating_meter" value={fourStarCount} min="0" max={reviews.length}></meter>
            <div className="total_number_reviews_for_star_rating">{fourStarCount}</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">3 star</div>
            <meter className="star_rating_meter" value={threeStarCount} min="0" max={reviews.length}></meter>
            <div className="total_number_reviews_for_star_rating">{threeStarCount}</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">2 star</div>
            <meter className="star_rating_meter" value={twoStarCount}  min="0" max={reviews.length}></meter>
            <div className="total_number_reviews_for_star_rating">{twoStarCount}</div>
          </div>
        </div>
        <div className="star_rating_bars_container">
          <div className="rating_bar_instance_container">
            <div className="number_star_text">1 star</div>
            <meter className="star_rating_meter" value={oneStarCount} min="0" max={reviews.length}></meter>
            <div className="total_number_reviews_for_star_rating">{oneStarCount}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default RatingDistribution;