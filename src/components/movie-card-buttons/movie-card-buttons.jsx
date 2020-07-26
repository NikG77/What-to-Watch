import React from "react";
import PropTypes from "prop-types";

const MovieCardButtons = (props) => {
  const {onPlayButtonClick, isFavorite} = props;

  return (
    <React.Fragment>
      <button onClick={onPlayButtonClick} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFavorite ? <use xlinkHref="in-list"></use> : <use xlinkHref="#add"></use>}
        </svg>
        <span>My list</span>
      </button>
    </React.Fragment>
  );
};

MovieCardButtons.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.oneOfType([
    () => null,
    PropTypes.bool.isRequired,
  ]),
};

export default MovieCardButtons;
