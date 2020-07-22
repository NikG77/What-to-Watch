import React from "react";
import {filmType} from "../../types/types";

const getTime = (number) => `${Math.trunc(number / 60)}h ${number % 60}m`;

const Details = (props) => {
  const {film} = props;
  const {director, starring, genre, releaseDate, duration} = film;


  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">
        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {starring.map((actor, i, actors) => (
                <React.Fragment key={actor + i}>
                  {i < actors.length - 1 ? actor + `, ` : actor}
                  {i < actors.length - 1 ? <br/> : ``}
                </ React.Fragment>
              ))}

            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getTime(duration)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{releaseDate}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

Details.propTypes = {
  film: filmType.isRequired,
};

export default Details;
