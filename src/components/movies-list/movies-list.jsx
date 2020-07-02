import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filmsType, filmType} from "../../types";


class MoviesList extends PureComponent {

  render() {
    const {films, onSmallMovieCardClick} = this.props;
    // const {film} = this.state;
    const {film, onSmallMovieCardHover} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) =>
          <SmallMovieCard
            key={movie + i}
            film={movie}
            onSmallMovieCardClick={onSmallMovieCardClick}
            //
            onSmallMovieCardHover={onSmallMovieCardHover}
            isPlaying={film === movie}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: filmsType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default MoviesList;
