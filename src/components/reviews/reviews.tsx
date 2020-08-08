import * as React from "react";
import {connect} from "react-redux";

import {Comment} from "../../types";
import ReviewsColumn from "../reviews-column/reviews-column";
import {getComments} from "../../reducer/data/selectors";

interface Props {
  id: number;
  reviews: Array<Comment>;
}

const Reviews: React.FunctionComponent<Props> = (props: Props) => {

  const {reviews} = props;
  if (reviews) {
    const reviewsColumns1 = reviews.slice(0, Math.ceil(reviews.length / 2));
    const reviewsColumns2 = reviews.slice(Math.ceil(reviews.length / 2));

    return (
      <div className="movie-card__reviews movie-card__row">
        {reviewsColumns1.length > 0 && <ReviewsColumn reviewsColumns={reviewsColumns1} />}
        {reviewsColumns2.length > 0 && <ReviewsColumn reviewsColumns={reviewsColumns2} />}
      </div>
    );
  }
  return null;
};


const mapStateToProps = (state) => ({
  reviews: getComments(state),
});

export {Reviews};

export default connect(mapStateToProps)(Reviews);

