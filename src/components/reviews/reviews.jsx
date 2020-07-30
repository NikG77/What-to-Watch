import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import ReviewsColumn from "../reviews-column/reviews-column.jsx";
import {getComments} from "../../reducer/data/selectors.js";
import {Operation as OperationData} from "../../reducer/data/data.js";

class Reviews extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, onGetComments} = this.props;
    onGetComments(id);
  }

  render() {
    const {reviews} = this.props;
    if (reviews) {
      const reviewsColumns1 = reviews.slice(0, Math.ceil(reviews.length / 2));
      const reviewsColumns2 = reviews.slice(Math.ceil(reviews.length / 2));

      return (
        <div className="movie-card__reviews movie-card__row">
          {reviewsColumns1.length > 0 ? <ReviewsColumn reviewsColumns={reviewsColumns1} /> : ``}
          {reviewsColumns2.length > 0 ? <ReviewsColumn reviewsColumns={reviewsColumns2} /> : ``}
        </div>
      );
    }
    return null;
  }

}


Reviews.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.number.isRequired,
  ]),
  reviews: PropTypes.oneOfType([
    () => null,
    PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.date,
      rating: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })).isRequired,
  ]),
  onGetComments: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  reviews: getComments(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGetComments(id) {
    dispatch(OperationData.loadComments(id));
  },
});


export {Reviews};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
