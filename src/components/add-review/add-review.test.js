import React from "react";
import renderer from "react-test-renderer";
import {AddReview} from "./add-review";
import history from "../../history";
import {Router} from "react-router-dom";


const mockUserInfo = {fake: true};

it(`Should AddReview render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <AddReview
            onReviewSubmit={() => {}}
            id={7}
            userInfo={mockUserInfo}
            isFormDisabled={false}
            review={``}
            onSubmitForm={() => {}}
            onChangeInput={() => {}}
          />
        </Router>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
