import * as React from "react";
import PropTypes from "prop-types";
import {filmType} from "../../types/types";
import VideoPlayer from "../video-player/video-player.jsx";
import {TIME_DELAY} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/watch/watch.js";
import {Link} from "react-router-dom";
import history from "../../history.js";
import {AppRoute} from "../../const.js";

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
  const {title, previewVideo, src, id} = film;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => setTimer(film, onSmallMovieCardHover)}
      onMouseLeave={() => clearTimer(null, onSmallMovieCardHover)}
      onClick={() => {
        clearTimer(film, onSmallMovieCardClick);
        history.push(`${AppRoute.FILM}/${id}`);
      }}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          src={previewVideo}
          poster={src}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link to={`${AppRoute.FILM}/${id}`} className="small-movie-card__link">{title}</Link>
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


const mapDispatchToProps = (dispatch) => ({
  onSmallMovieCardClick(film) {
    dispatch(ActionCreator.setFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
  }
});

export {SmallMovieCard};

export default connect(null, mapDispatchToProps)(SmallMovieCard);
