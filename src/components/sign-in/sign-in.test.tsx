import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {noon} from "../../utils/utils";
import SignIn from "./sign-in";


it(`SignIn component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <SignIn
            onSubmit={noon}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

