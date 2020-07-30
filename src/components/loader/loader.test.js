import React from "react";
import renderer from "react-test-renderer";
import Loader from "./loader.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";


it(`Loader component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <Loader />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
