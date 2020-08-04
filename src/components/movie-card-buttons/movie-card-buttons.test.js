import React from "react";
import renderer from "react-test-renderer";
import {MovieCardButtons} from "./movie-card-buttons";
import history from "../../history";
import {Router} from "react-router-dom";


it(`Should Movie render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        ><MovieCardButtons
            id={1}
            isFavorite={true}
            onChangeStatusButtonClick={() => {}}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
