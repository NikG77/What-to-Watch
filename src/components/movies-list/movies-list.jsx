import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filmsType, filmType} from "../../types";


const MoviesList = (props) => {

  const {films, onSmallMovieCardClick, activeItem, onItemClick} = props;

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

};

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
