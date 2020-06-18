import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const films = [{title: `Bohemian Rhapsody`, src: ` `}];

it(`Should MoviesList render correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      films={films}
      onSmallMovieCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
