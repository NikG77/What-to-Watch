import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const film = {
  title: `Bohemian Rhapsody`,
  src: ` `
};

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      film={film}
      onSmallMovieCardClick={() => {}}
      onSmallMovieCardHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
