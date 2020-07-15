import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs.jsx";
// import TabName from "../../const.js";

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

it(`Should Tabs render correctly`, () => {
  const tree = renderer
    .create(<Tabs
      film={film}
      onItemClick={() => {}}
      activeItem={``}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
