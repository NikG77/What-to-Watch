import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews";


it(`Should Reviews render correctly`, () => {
  const tree = renderer
    .create(
        <Reviews
          id={6}
          onGetComments={() => {}}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
