import * as React from "react";
import * as renderer from "react-test-renderer";
import {Header} from "./header";
import history from "../../history";
import {Router} from "react-router-dom";
import {UserInfoInterface} from "../../types";

const mockUserInfo: UserInfoInterface = {
  id: 0,
  email: ``,
  name: ``,
  avatarUrl: ``,
};

it(`Should Header render correctly`, () => {

  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Header
            isAuthorization={false}
            userInfo={mockUserInfo}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

