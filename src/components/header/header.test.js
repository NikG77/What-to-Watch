import React from "react";
import renderer from "react-test-renderer";
import {Header} from "./header";
import history from "../../history";
import {Router} from "react-router-dom";


it(`Should Header render correctly`, () => {

  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Header
            isAuthorization={false}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

