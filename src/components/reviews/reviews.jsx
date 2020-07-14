import React from "react";
import PropTypes from "prop-types";
import ReviewsColumn from "../reviews-column/reviews-column.jsx";

const Reviews = (props) => {
  const {reviews} = props;

  const reviewsColumns1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsColumns2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className="movie-card__reviews movie-card__row">
      {reviewsColumns1.length > 0 ? <ReviewsColumn reviewsColumns={reviewsColumns1} /> : ``}
      {reviewsColumns2.length > 0 ? <ReviewsColumn reviewsColumns={reviewsColumns2} /> : ``}
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
