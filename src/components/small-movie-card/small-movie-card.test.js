import React from "react";
import renderer from "react-test-renderer";
import SmallMovieCard from "./small-movie-card.jsx";

const film = {
  title: `One Flew Over the Cuckoo's Nest`,
  src: ``,
  previewVideo: ``,
  poster: ``,
};

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer
    .create(<SmallMovieCard
      film={film}
      onSmallMovieCardClick={() => {}}
      onSmallMovieCardHover={() => {}}
      isPlaying={false}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
