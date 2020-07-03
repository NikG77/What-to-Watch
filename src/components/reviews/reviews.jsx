import React from "react";
// import PropTypes from "prop-types";
// import {filmType} from "../../types";
import {reviews} from "../../mock/films.js";

const options = {year: `numeric`, month: `long`, day: `numeric`};

const reformatDate = (date) => new Intl.DateTimeFormat(`en-EN`, options).format(new Date(date));
const getForDateTime = (date) => (`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`);

const Reviews = () => {

  const reviewsCol1 = reviews.filter((review, i) => !(i % 2));

  const reviewsCol2 = reviews.filter((review, i) => i % 2);

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
                  <time className="review__date" dateTime={getForDateTime(review.date)}>{reformatDate(review.date)}</time>
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
                  <time className="review__date" dateTime={getForDateTime(review.date)}>{reformatDate(review.date)}</time>
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

// Reviews.propTypes = {
//   rewiews: PropTypes.arrayOf(PropTypes.share({
//     text: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//     date: PropTypes.date.isRequired,
//     rating: PropTypes.number.isRequired,

//   })),
// };

export default Reviews;
