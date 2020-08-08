import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";

import history from "../../history";
import {noon} from "../../utils/utils";
import {FilmType, UserInfoInterface} from "../../types";

import {AddReview} from "./add-review";


const mockUserInfo: UserInfoInterface = {
  id: 0,
  email: ``,
  name: ``,
  avatarUrl: ``,
};

const film: FilmType = {
  backgroundColor: ``,
  description: ` `,
  director: ``,
  duration: 100,
  id: 1,
  genre: `Drama`,
  isFavorite: false,
  pictureBackground: ``,
  poster: ``,
  previewVideo: ``,
  ratingCount: 200,
  ratingScore: 8,
  releaseDate: 2020,
  src: ``,
  starring: [``, ``],
  title: `One Flew Over the Cuckoo's Nest`,
  videoLink: ``,
};

it(`Should AddReview render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <AddReview
            film={film}
            id={7}
            userInfo={mockUserInfo}
            isFormDisabled={false}
            review={``}
            onSubmitForm={noon}
            onChangeInput={noon}
            onChangeTextarea={noon}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
