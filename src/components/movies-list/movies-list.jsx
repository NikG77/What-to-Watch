import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filmsType, filmType} from "../../types";


class MoviesList extends PureComponent {

  render() {
    const {films, onSmallMovieCardClick, activeItem, onItemClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) =>
          <SmallMovieCard
            key={movie + i}
            film={movie}
            onSmallMovieCardClick={onSmallMovieCardClick}
            onSmallMovieCardHover={onItemClick}
            isPlaying={activeItem === movie}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: filmsType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

export default MoviesList;
