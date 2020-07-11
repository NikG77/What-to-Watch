import React from "react";
import PropTypes from "prop-types";
import ReviewsColumn from "../reviews-col/reviews-col.jsx";

const Reviews = (props) => {
  const {reviews} = props;

  const reviewsColumn1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsColumn2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewsColumn1.length > 0 ? <ReviewsColumn reviewsColumn={reviewsColumn1} /> : ``}
      {reviewsColumn2.length > 0 ? <ReviewsColumn reviewsColumn={reviewsColumn2} /> : ``}
    </div>
  );
};


Reviews.propTypes = {
  reviews: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.date,
      rating: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
  ]),
};


export default Reviews;
