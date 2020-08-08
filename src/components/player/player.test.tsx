import * as React from "react";
import * as renderer from "react-test-renderer";
import {Player} from "./player";
import {noon} from "../../utils/utils";


const videoRef = React.createRef<HTMLVideoElement>();

it(`Should Player render correctly`, () => {
  const tree = renderer
    .create(<Player
      duration={30}
      id={1}
      isPlay={true}
      forwardedRef={videoRef}
      onFullScreenClick={noon}
      onPlayClick={noon}
      progress={10}
      setDuration={noon}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
