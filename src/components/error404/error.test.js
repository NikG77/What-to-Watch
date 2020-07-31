import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import Error404 from "./error404.jsx";
import history from "../../history.js";


it(`Error404 component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <Error404 />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
