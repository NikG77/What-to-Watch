import * as React from "react";
import {configure, mount} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import Player from "./player";
import {noon} from "../../utils/utils";

configure({
  adapter: new Adapter(),
});


it(`Click by "player play" button calls callback`, () => {
  const onPlayClick = jest.fn();
  const videoRef = React.createRef<HTMLVideoElement>();

  const player = mount(
      <Player
        duration={30}
        id={1}
        isPlay={true}
        forwardedRef={videoRef}
        onFullScreenClick={noon}
        onPlayClick={onPlayClick}
        progress={10}
        setDuration={noon}
      />
  );

  player.find(`button.player__play`).simulate(`click`);
  expect(onPlayClick).toHaveBeenCalledTimes(1);

});


it(`Click by "full screen" button calls callback`, () => {
  const onFullScreenClick = jest.fn();
  const videoRef = React.createRef<HTMLVideoElement>();

  const player = mount(
      <Player
        duration={30}
        id={1}
        isPlay={true}
        forwardedRef={videoRef}
        onFullScreenClick={onFullScreenClick}
        onPlayClick={noon}
        progress={10}
        setDuration={noon}
      />
  );

  player.find(`button.player__full-screen`).simulate(`click`);
  expect(onFullScreenClick).toHaveBeenCalledTimes(1);
});

