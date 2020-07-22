import React from "react";
import {filmType} from "../../types/types";
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
  const {ratingScore, ratingCount, director, starring, description} = film;
  const starringDetails = starring.join(`, `);

  const ratingLevel = getRatingLevel(ratingScore);

  const createParagraf = (text) => text
    .split(`\n`)
    .map((paragraf) => {
      return <p key={paragraf}>{paragraf}</p>;
    });

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
        {createParagraf(description)}

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

