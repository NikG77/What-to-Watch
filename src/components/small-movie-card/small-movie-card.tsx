import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {ActionCreator} from "../../reducer/watch/watch";
import {AppRoute, TIME_DELAY} from "../../const";
import {FilmType} from "../../types";
import history from "../../history";

import VideoPlayer from "../video-player/video-player";


let timerId;

const setTimer = (film, cb) => {
  timerId = setTimeout(() => cb(film), TIME_DELAY);
};

const clearTimer = (film, cb) => {
  clearTimeout(timerId);
  cb(film);
};

interface Props {
  film: FilmType;
  onSmallMovieCardClick: () => void;
  onSmallMovieCardHover: () => void;
  isPlaying: boolean;
}

const SmallMovieCard: React.FunctionComponent<Props> = (props: Props) => {
  const {
    film,
    onSmallMovieCardClick,
    onSmallMovieCardHover,
    isPlaying
  } = props;

  const {
    id,
    previewVideo,
    title,
    src
  } = film;

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


const mapDispatchToProps = (dispatch) => ({
  onSmallMovieCardClick(film) {
    dispatch(ActionCreator.setFilm(film));
    dispatch(ActionCreator.setGenre(film.genre));
  }
});

export {SmallMovieCard};

export default connect(null, mapDispatchToProps)(SmallMovieCard);
