import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import Logo from "./logo";
import history from "../../history";


it(`Logo component render correctly`, () => {

  const tree = renderer
    .create(
        <Router history={history}>
          <Logo className={``} />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
