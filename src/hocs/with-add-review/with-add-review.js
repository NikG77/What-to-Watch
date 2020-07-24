import React, {PureComponent} from "react";
// import PropTypes from "prop-types";


const withAddReview = (Component) => {

  class WithAddReview extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 3,
        comment: null,
      };

      this.handleTextareaChange = this.handleTextareaChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleTextareaChange(evt) {
      this.setState({comment: evt.target.value});
    }

    handleInputChange(evt) {
      this.setState({rating: evt.target.value});
    }

    render() {
      const {rating, comment} = this.state;

      return (
        <Component
          {...this.props}
          rating={rating}
          comment={comment}
          onTextareaChange={this.handleTextareaChange}
          onInputChange={this.handleInputChange}
        />
      );

    }
  }


  // WithAddReview.propTypes = {
  //   rating: PropTypes.number.isRequired,
  //   comment: PropTypes.string.isRequired,
  // };

  return WithAddReview;

};


export default withAddReview;
