import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmsType} from "../../types";

const withHoverItem = (Component) => {

  class WithHoverItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        film: null,
      };

      this.handlerSmallMovieCardHover = this.handlerSmallMovieCardHover.bind(this);
    }

    handlerSmallMovieCardHover(film) {
      if (film) {
        this.setState({film});
      } else {
        this.setState({film: null});
      }
    }

    render() {
      const {films, onSmallMovieCardClick} = this.props;
      const {film} = this.state;

      return (
        <Component
          {...this.props}
          films={films}
          onSmallMovieCardClick={onSmallMovieCardClick}
          film={film}
          onSmallMovieCardHover={this.handlerSmallMovieCardHover}
        />
      );
    }
  }

  WithHoverItem.propTypes = {
    films: filmsType.isRequired,
    onSmallMovieCardClick: PropTypes.func.isRequired,
  };

  return WithHoverItem;

};


export default withHoverItem;
