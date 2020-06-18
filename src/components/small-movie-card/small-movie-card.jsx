import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {film, onSmallMovieCardClick, onSmallMovieCardHover} = props;
  const {title, src: srcFilm} = film;

  return (
    <article
      onMouseEnter={() => {
        onSmallMovieCardHover(film);
      }} className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src={srcFilm} alt={title} width="280" height="175" />
      </div>
      <h3 onClick={onSmallMovieCardClick}

        className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>

  );
};

SmallMovieCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;

