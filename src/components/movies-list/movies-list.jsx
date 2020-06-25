import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filmsType} from "../../types";
import {TIME_DELAY} from "../../const.js";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
      isPlaying: false,
    };
    this.isHovered = false;

    this._handleSmallMovieCardHover = this._handleSmallMovieCardHover.bind(this);
  }

  _checkTimeHover(film) {
    if (this.isHovered) {
      this.setState({film, isPlaying: true});
    }
  }

  _handleSmallMovieCardHover(film) {
    if (film) {
      this.isHovered = true;
      setTimeout(() => {
        this._checkTimeHover(film);
      }, TIME_DELAY);

    } else {
      this.isHovered = false;
      this.setState({film, isPlaying: false});
    }
  }

  render() {
    const {films, onSmallMovieCardClick} = this.props;
    const {isPlaying, film} = this.state;


    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) =>
          <SmallMovieCard
            key={movie + i}
            film={movie}
            onSmallMovieCardClick={onSmallMovieCardClick}
            onSmallMovieCardHover={this._handleSmallMovieCardHover}
            isPlaying={isPlaying && film === movie}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: filmsType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
