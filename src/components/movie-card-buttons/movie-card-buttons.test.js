import React from "react";
import renderer from "react-test-renderer";
import {MovieCardButtons} from "./movie-card-buttons.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";


it(`Should Movie render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        ><MovieCardButtons
            id={1}
            isFavorite={true}
            // onPlayButtonClick={() => {}}
            onChangeStatusButtonClick={() => {}}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
