import React from 'react';
import axios from 'axios';
import FiveStar from './stars/FiveStar.jsx';
import FourStar from './stars/FourStar.jsx';
import ThreeStar from './stars/ThreeStar.jsx';
import TwoStar from './stars/TwoStar.jsx';
import OneStar from './stars/OneStar.jsx';

const dotPositionOne = {marginLeft: '0%'};
const dotPositionTwo = {marginLeft: '22%'};
const dotPositionThree = {marginLeft: '47%'};
const dotPositionFour = {marginLeft: '73%'};
const dotPositionFive = {marginLeft: '97%'};

class ReviewInstance extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.voteYes = this.voteYes.bind(this);
    this.voteNo = this.voteNo.bind(this);
    this.reportReview = this.reportReview.bind(this);
  }

  voteYes() {
    let { eachReview } = this.props;
    axios.put(`/api/reviews/${eachReview.id}/yes`)
      .then(() => {
        this.props.getReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  voteNo() {
    let { eachReview } = this.props;
    axios.put(`/api/reviews/${eachReview.id}/no`)
      .then(() => {
        this.props.getReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  reportReview() {
    let { eachReview } = this.props;
    axios.put(`/api/reviews/${eachReview.id}/reported`)
      .then(() => {
        this.props.getReviews();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    let { eachReview } = this.props;
    let stars;
    if (eachReview.stars === '5') {
      stars = <FiveStar />;
    } else if (eachReview.stars === '4') {
      stars = <FourStar />;
    } else if (eachReview.stars === '3') {
      stars = <ThreeStar />;
    } else if (eachReview.stars === '2') {
      stars = <TwoStar />;
    } else {
      stars = <OneStar />;
    }

    let positionDotQuality;
    if (eachReview.quality === '0') {
      positionDotQuality = dotPositionOne
    } else if (eachReview.quality === '1') {
      positionDotQuality = dotPositionTwo;
    } else if (eachReview.quality === '2') {
      positionDotQuality = dotPositionThree;
    } else if (eachReview.quality === '3') {
      positionDotQuality = dotPositionFour;
    } else {
      positionDotQuality = dotPositionFive;
    }

    let positionDotComfortLevel;
    if (eachReview.comfort_level === '0') {
      positionDotComfortLevel = dotPositionOne;
    } else if (eachReview.comfort_level === '1') {
      positionDotComfortLevel = dotPositionTwo;
    } else if (eachReview.comfort_level === '2') {
      positionDotComfortLevel = dotPositionThree;
    } else if (eachReview.comfort_level === '3') {
      positionDotComfortLevel = dotPositionFour;
    } else {
      positionDotComfortLevel = dotPositionFive;
    }

    let positionDotFit;
    if (eachReview.fit === '0') {
      positionDotFit = dotPositionOne;
    } else if (eachReview.fit === '1') {
      positionDotFit = dotPositionTwo;
    } else if (eachReview.fit === '2') {
      positionDotFit = dotPositionThree
    } else if (eachReview.fit === '3') {
      positionDotFit = dotPositionFour;
    } else {
      positionDotFit = dotPositionFive;
    }

    return (
      <div className="review_instance_main_container" >
        <div className="review_instance_left_container">
          <div className="review_instance_stars_user_timestamp_container">
            <span className="review_instance_stars">{stars}</span>
            <span className="review_instance_user">{eachReview._user}</span>
            <span className="review_instance_timestamp"> {eachReview.createdat} days ago</span>
          </div>
          <div className="review_title_container">
            {eachReview.title}
          </div>
          <div className="review_description_container">
            {eachReview._description}
          </div>
          <div className="review_instance_helpfulness_container">
            <span className="review_helpful_text">
              Helpful?
            </span>
            <button className="review_vote_yes" onClick={this.voteYes}>Yes · {eachReview._yes}</button>
            <button className="review_vote_no" onClick={this.voteNo}>No · {eachReview._no}</button>
            <button className="review_vote_report" onClick={this.reportReview}>{eachReview.report}</button>
          </div>
        </div>
        <div className="review_instance_right_container">
          <div className="verified_purchaser_container">
            <img className="verified_purchaser_icon" src="https://www.champion.com/static/version1611225458/frontend/Hanes/champion/en_US/assets/images/icon-verified.png"></img>
            <span className="verified_purchaser_text">
              Verified Purchaser
            </span>
          </div>
          <div className="review_quality_container">
            <div className="quality_text">
              Quality
            </div>
            <div className="quality_rating_bar_container">
              <div className="quality_rating_bar_1"></div>
              <div className="quality_rating_bar_2"></div>
              <div className="quality_rating_bar_3"></div>
              <div className="quality_rating_bar_4"></div>
              <div className="rating_bar_value_red_dot" style={positionDotQuality}></div>
            </div>
            <div className="quality_rating_poor_excellent_text_container">
              <span>Poor</span>
              <span>Excellent</span>
            </div>
          </div>
          <div className="review_comfort_level_container">
            <div className="comfort_level_text">
              comfort level
            </div>
            <div className="quality_rating_bar_container">
              <div className="quality_rating_bar_1"></div>
              <div className="quality_rating_bar_2"></div>
              <div className="quality_rating_bar_3"></div>
              <div className="quality_rating_bar_4"></div>
              <div className="rating_bar_value_red_dot" style={positionDotComfortLevel}></div>
            </div>
            <div className="comfort_level_rating_text_container">
              <span>Uncomfortable</span>
              <span>Comfortable</span>
            </div>
          </div>
          <div className="review_fit_container">
            <div className="fit_text">
              fit
            </div>
            <div className="quality_rating_bar_container">
              <div className="quality_rating_bar_1"></div>
              <div className="quality_rating_bar_2"></div>
              <div className="quality_rating_bar_3"></div>
              <div className="quality_rating_bar_4"></div>
              <div className="rating_bar_value_red_dot" style={positionDotFit}></div>
            </div>
            <div className="fit_rating_text_container">
              <span>Small</span>
              <span>Big</span>
            </div>
          </div>
        </div>
      </div>
    )
  }


}

export default ReviewInstance;