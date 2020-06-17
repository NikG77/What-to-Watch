import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MoviesList = (props) => {
  const {filmsTitles, onSmallMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {filmsTitles.map((title, i) =>
        <SmallMovieCard
          key={title + i}
          title={title}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
      )}
    </div>
  );
};

MoviesList.propTypes = {
  filmsTitles: PropTypes.array.isRequired,
  // key: PropTypes.string.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
