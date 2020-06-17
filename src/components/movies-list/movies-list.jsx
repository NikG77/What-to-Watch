import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {films, onSmallMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film, i) =>
        <SmallMovieCard
          key={film + i}
          film={film}
          onSmallMovieCardClick={onSmallMovieCardClick}
          onSmallMovieCardHover={() => {}}
        />
      )}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.array.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
