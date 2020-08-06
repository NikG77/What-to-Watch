import * as React from "react";
import * as renderer from "react-test-renderer";
import ShowMore from "./show-more";
import {noon} from "../../utils/utils";

it(`Should ShowMore render correctly`, () => {
  const tree = renderer
    .create(<ShowMore
      onShowMoreButtonClick={noon}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
