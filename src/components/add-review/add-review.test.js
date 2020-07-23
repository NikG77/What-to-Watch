import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review.jsx";


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

const mockUserInfo = {fake: true};

it(`Should AddReview render correctly`, () => {
  const tree = renderer
    .create(<AddReview
      onRevieSubmit={() => {}}
      film={film}
      userInfo={mockUserInfo}
      isFormDisabled={false}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
