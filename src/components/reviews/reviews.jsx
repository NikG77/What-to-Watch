import React from "react";
import PropTypes from "prop-types";
import ReviewCol from "../reviews-col/reviews-col.jsx";

const Reviews = (props) => {
  const {reviews} = props;

  const reviewsCol1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsCol2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="movie-card__reviews movie-card__row">
      <ReviewCol reviewsCol={reviewsCol1} />
      <ReviewCol reviewsCol={reviewsCol2} />
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
