import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {DEFAULT_CHECKED_STARS} from "../../const.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";


const withAddReview = (Component) => {

  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_CHECKED_STARS,
        review: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    handleSubmit(evt) {
      const {onReviewSubmit, id} = this.props;
      evt.preventDefault();

      onReviewSubmit(id, {
        rating: this.state.rating,
        comment: this.state.review,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitForm={this.handleSubmit}
          onChangeInput={this.handleInputChange}
          review={this.state.review}
        />
      );
    }
  }

  WithAddReview.propTypes = {
    onReviewSubmit: PropTypes.func.isRequired,
    id: PropTypes.oneOfType([
      () => null,
      PropTypes.number.isRequired,
    ]),
  };

  const mapDispatchToProps = (dispatch) => ({
    onReviewSubmit(id, comment) {
      dispatch(DataOperation.postComments(id, comment));
    }
  });

  return connect(null, mapDispatchToProps)(WithAddReview);

};


export default withAddReview;
