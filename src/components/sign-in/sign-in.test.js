import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import history from "../../history";
import {Router} from "react-router-dom";


it(`SignIn component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <SignIn
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

