import React from "react";
import {filmType} from "../../types";
import {RatingLevel} from "../../const.js";

const getRatingLevel = (score) => {
  let ratingLevel = ``;

  switch (true) {
    case score < RatingLevel.NORMAL_MIN && score >= RatingLevel.BAD_MIN:
      ratingLevel = `Bad`;
      break;
    case score < RatingLevel.GOOD_MIN && score >= RatingLevel.NORMAL_MIN:
      ratingLevel = `Normal`;
      break;
    case score < RatingLevel.VERY_GOOD_MIN && score >= RatingLevel.GOOD_MIN:
      ratingLevel = `Good`;
      break;
    case score < RatingLevel.AWESOME && score >= RatingLevel.VERY_GOOD_MIN:
      ratingLevel = `Very good`;
      break;
    case score === RatingLevel.AWESOME:
      ratingLevel = `Awesome`;
      break;
  }
  return ratingLevel;
};

const Overview = (props) => {
  const {film} = props;
  const {ratingScore, ratingCount, director, starring} = film;
  const starringDetails = starring.join(`, `);

  const ratingLevel = getRatingLevel(ratingScore);

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{ratingScore}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingLevel}</span>
          <span className="movie-rating__count">{ratingCount} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&lsquo;s friend and protege.</p>

        <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&lsquo;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starringDetails} and other</strong></p>
      </div>
    </React.Fragment>
  );

};

Overview.propTypes = {
  film: filmType.isRequired,
};

export default Overview;

