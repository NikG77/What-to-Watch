import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {filmType} from "../../types";
import VideoPlayer from "../video-player/video-player.jsx";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVideo: false,
    };

  }

  render() {
    const {film, onSmallMovieCardClick, onSmallMovieCardHover} = this.props;
    const {title, preview, src} = film;

    return (
      <article
        onMouseEnter={() => onSmallMovieCardHover(film)}
        onMouseLeave={() => onSmallMovieCardHover(null)}
        className="small-movie-card catalog__movies-card">

        <div onClick={() => onSmallMovieCardClick(film)} className="small-movie-card__image">
          <VideoPlayer
            src={preview}
            poster={src}
            isPlaying={false}

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
  }
}

SmallMovieCard.propTypes = {
  film: filmType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onSmallMovieCardHover: PropTypes.func.isRequired,
};

export default SmallMovieCard;

