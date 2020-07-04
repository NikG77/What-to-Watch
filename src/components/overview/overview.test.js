import React from "react";
import renderer from "react-test-renderer";
import Overview from "./overview.jsx";

const film = {
  title: `One Flew Over the Cuckoo's Nest`,
  src: ``,
  poster: ``,
  ratingScore: 8,
  ratingCount: 200,
  director: ``,
  starring: [``, ``],
  genre: `Drama`,
  releaseDate: 2020,
  pictureBackground: ``,
  previewVideo: ``,
  duration: 100,
};

it(`Should Overview render correctly`, () => {
  const tree = renderer
    .create(<Overview
      film={film}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
