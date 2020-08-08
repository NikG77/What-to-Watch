import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import history from "../../history";
import {noon} from "../../utils/utils";
import {MovieCardButtons} from "./movie-card-buttons";


it(`Should Movie render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        ><MovieCardButtons
            id={1}
            isFavorite={true}
            onChangeStatusButtonClick={noon}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
