import React from 'react';

const StatsRecommendation = (props) => {
  let { reviews } = props
  let recommendationCount = 0;
  for (var i = 0; i < reviews.length; i++) {
    let eachReview = reviews[i];
    if (eachReview.recommend > 1) {
      recommendationCount += 1;
    }
  }
  let percentage = Math.floor((recommendationCount/reviews.length) * 100)
  return (
    <div className="stats_recommendation">
      <div className="stats_text">
        {recommendationCount} OUT OF {reviews.length} ({percentage}%)
      </div>
      OF REVIEWERS WOULD RECOMMEND THIS PRODUCT TO A FRIEND.
    </div>
  )
}


export default StatsRecommendation;