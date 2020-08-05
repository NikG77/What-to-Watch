import * as React from "react";

import {Comment} from "../../types";
import {formatForDateTime, reformatDate} from "../../utils/utils";

interface Props {
  reviewsColumns: Array<Comment>;
};


const ReviewsColumn: React.FunctionComponent<Props> = (props: Props) => {
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

export default ReviewsColumn;

