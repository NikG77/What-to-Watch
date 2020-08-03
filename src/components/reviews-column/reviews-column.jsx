import React from "react";
import PropTypes from "prop-types";
import {formatForDateTime, reformatDate} from "../../utils/utils.js";

const ReviewsColumn = (props) => {
  const {reviewsColumns} = props;

  return (
    <div className="movie-card__reviews-col">
      {reviewsColumns.map((review) => (
        <div key={review.id} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{review.text}</p>
            <footer className="review__details">
              <cite className="review__author">{review.author}</cite>
              <time className="review__date" dateTime={formatForDateTime(review.date)}>{reformatDate(review.date)}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{review.rating}</div>
        </div>
      ))}
    </div>
  );
};


ReviewsColumn.propTypes = {
  reviewsColumns: PropTypes.oneOfType([
    () => null,
    PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.date,
      rating: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
  ]),
};

export default ReviewsColumn;

