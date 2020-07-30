import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";


it(`Footer component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <Footer />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
