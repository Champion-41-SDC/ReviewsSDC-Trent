import React from 'react';

const ReviewsPageBar = (props) => {
  let { reviewsCount, nextPage, previousPage } = props;
  return (
    <div className="reviews-page-bar-container">
      <div className="reviews-current-number-text">
        {reviewsCount[1]}-{reviewsCount[2]} of {reviewsCount[0]} Reviews
      </div>
      <div className="reviews-flip-page-buttons-container">
        <button className="reviews-previous-page-button" onClick={previousPage}>   ◄   </button>
        <button className="reviews-next-page-button" onClick={nextPage}>   ►   </button>
      </div>
    </div>
  )
}

export default ReviewsPageBar;