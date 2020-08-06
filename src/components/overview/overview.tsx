import * as React from "react";

import {FilmType} from "../../types";
import {Rating, RatingLevel} from "../../const";


const getRatingLevel = (score) => {
  let ratingLevel = ``;

  switch (true) {
    case score < RatingLevel.NORMAL_MIN && score >= RatingLevel.BAD_MIN:
      ratingLevel = Rating.BAD;
      break;
    case score < RatingLevel.GOOD_MIN && score >= RatingLevel.NORMAL_MIN:
      ratingLevel = Rating.NORMAL;
      break;
    case score < RatingLevel.VERY_GOOD_MIN && score >= RatingLevel.GOOD_MIN:
      ratingLevel = Rating.GOOD;
      break;
    case score < RatingLevel.AWESOME && score >= RatingLevel.VERY_GOOD_MIN:
      ratingLevel = Rating.VERY_GOOD;
      break;
    case score === RatingLevel.AWESOME:
      ratingLevel = Rating.AWESOME;
      break;
  }
  return ratingLevel;
};

interface Props {
  film: FilmType;
}

const Overview: React.FunctionComponent<Props> = (props: Props) => {
  const {film} = props;
  const {description, director, ratingCount, ratingScore, starring, } = film;
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

export default Overview;

