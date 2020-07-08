import React from "react";
import renderer from "react-test-renderer";
import {Player} from "./player.jsx";

it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(<Player
      onExitPlayButtonClick={() => {}}
      // ref={}
      isPlay={true}
      duration={30}
      progress={10}
      onPlayClick={() => {}}
      onFullScreenClick={() => {}}
      setDuration={() => {}}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
