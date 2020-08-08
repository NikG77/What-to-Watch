import * as React from "react";
import * as renderer from "react-test-renderer";
import Details from "./details";

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
  backgroundColor: ``,
  videoLink: ``,
  description: ` `,
  isFavorite: false,
  id: 1,
};

it(`Should Details render correctly`, () => {
  const tree = renderer
    .create(<Details
      film={film}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
