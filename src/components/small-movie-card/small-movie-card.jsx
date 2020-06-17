import React from "react";
import PropTypes from "prop-types";

const SmallMovieCard = (props) => {
  const {title, onSmallMovieCardClick, onSmallMovieCardHover} = props;

  return (
    <article className="small-movie-card catalog__movies-card">
      <div className="small-movie-card__image">
        <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt={title} width="280" height="175" />
      </div>
      <h3 onClick={onSmallMovieCardClick}
        onMouseEnter={() => {
          onSmallMovieCardHover(title);
        }}
        className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>

  );
};

SmallMovieCard.propTypes = {
  title: PropTypes.string.isRequired,

  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;

