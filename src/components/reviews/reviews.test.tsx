import * as React from "react";
import * as renderer from "react-test-renderer";
import {Reviews} from "./reviews";


it(`Should Reviews render correctly`, () => {
  const tree = renderer
    .create(
        <Reviews
          id={6}
          reviews={[]}

        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
