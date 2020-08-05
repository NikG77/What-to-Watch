import * as React from "react";
import {connect} from "react-redux";

import {DEFAULT_CHECKED_STARS} from "../../const";
import {Operation as DataOperation} from "../../reducer/data/data";

interface State {
  rating: number;
  review: string;
}
interface Props {
  onReviewSubmit: (id: number, comment: {rating: number, comment: string}) => void;
  id: number;
}

const withAddReview = (Component) => {

  class WithAddReview extends React.PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this.state = {
        rating: DEFAULT_CHECKED_STARS,
        review: ``,
      };

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }

    handleInputChange(evt) {
      this.setState({rating: evt.target.value});
    }

    handleTextAreaChange(evt) {
      this.setState({review: evt.target.value});
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
          onChangeTextarea={this.handleTextAreaChange}
          review={this.state.review}
        />
      );
    }
  }

  const mapDispatchToProps = (dispatch) => ({
    onReviewSubmit(id, comment) {
      dispatch(DataOperation.postComments(id, comment));
    }
  });

  return connect(null, mapDispatchToProps)(WithAddReview);

};


export default withAddReview;
