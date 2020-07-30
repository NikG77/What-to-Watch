import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import Logo from "./logo.jsx";
import history from "../../history.js";


it(`Logo component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <Logo className={``} />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
