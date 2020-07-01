import React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../types";
import VideoPlayer from "../video-player/video-player.jsx";
import {TIME_DELAY} from "../../const.js";


let timerId;

const setTimer = (film, cb) => {
  timerId = setTimeout(() => cb(film), TIME_DELAY);
};

const clearTimer = (film, cb) => {
  clearTimeout(timerId);
  cb(film);
};

const SmallMovieCard = (props) => {
  const {film, onSmallMovieCardClick, onSmallMovieCardHover, isPlaying} = props;
  const {title, previewVideo, src} = film;

  return (
    <article
      onMouseEnter={() => setTimer(film, onSmallMovieCardHover)}
      onMouseLeave={() => clearTimer(null, onSmallMovieCardHover)}
      className="small-movie-card catalog__movies-card">

      <div onClick={() => clearTimer(film, onSmallMovieCardClick)} className="small-movie-card__image">
        <VideoPlayer
          src={previewVideo}
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

