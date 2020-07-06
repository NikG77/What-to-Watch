import React from "react";
import renderer from "react-test-renderer";
import MovieCardButtons from "./movie-card-buttons.jsx";

it(`Should Movie render correctly`, () => {
  const tree = renderer
    .create(<MovieCardButtons
      onPlayButtonClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
