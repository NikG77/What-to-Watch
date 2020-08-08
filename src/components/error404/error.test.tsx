import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import Error404 from "./error404";
import history from "../../history";


it(`Error404 component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <Error404 />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
