import React from "react";
import PropTypes from "prop-types";
import {formatForDateTime, reformatDate} from "../../utils/common.js";

const Reviews = (props) => {
  const {reviews} = props;
  reviews.splice(5);

  // const reviewsCol1 = reviews.filter((review, i) => !(i % 2));
  // const reviewsCol2 = reviews.filter((review, i) => i % 2);
  const reviewsCol1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const reviewsCol2 = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">

        <div className="movie-card__reviews-col">
          {reviewsCol1.map((review) => (
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

        <div className="movie-card__reviews-col">
          {reviewsCol2.map((review) => (
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

      </div>
    </React.Fragment>
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
