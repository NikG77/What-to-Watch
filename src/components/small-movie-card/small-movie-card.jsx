import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../types";
import VideoPlayer from "../video-player/video-player.jsx";

const DELAY = 1000;
let timerId;

const setTimer = (film, cb) => {
  timerId = setTimeout(() => cb(film), DELAY);
};

const clearTimer = (cb) => {
  clearTimeout(timerId);
  cb(null);
};

const SmallMovieCard = (props) => {
  const {film, onSmallMovieCardClick, onSmallMovieCardHover, isPlaying} = props;
  const {title, preview, src} = film;

  return (
    <article
      onMouseEnter={() => setTimer(film, onSmallMovieCardHover)}
      onMouseLeave={() => clearTimer(onSmallMovieCardHover)}
      className="small-movie-card catalog__movies-card">

      <div onClick={() => onSmallMovieCardClick(film)} className="small-movie-card__image">
        <VideoPlayer
          src={preview}
          poster={src}
          isPlaying={isPlaying}

        />
      </div>
      <h3 onClick={(evt) => {
        evt.preventDefault();
        onSmallMovieCardClick(film);
      }}
      className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>

    </article>

  );
};


SmallMovieCard.propTypes = {
  film: filmType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};

export default SmallMovieCard;

