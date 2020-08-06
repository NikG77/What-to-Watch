import * as React from "react";
import * as renderer from "react-test-renderer";
import Tabs from "./tabs";
import {noon} from "../../utils/utils";
import {FilmType} from "../../types";

const film: FilmType = {
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
      onItemClick={noon}
      activeItem={``}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
