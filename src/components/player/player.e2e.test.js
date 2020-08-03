import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Player from "./player.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

// it(`Click by "Exit" button calls callback`, () => {
//   const onExitPlayButtonClick = jest.fn();

//   const player = mount(
//       <Player
//         onExitPlayButtonClick={onExitPlayButtonClick}
//         isPlay={true}
//         duration={30}
//         progress={10}
//         onPlayClick={() => {}}
//         onFullScreenClick={() => {}}
//         setDuration={() => {}}
//       />
//   );

//   player.find(`button.player__exit`).simulate(`click`);
//   expect(onExitPlayButtonClick).toHaveBeenCalledTimes(1);
// });


it(`Click by "player play" button calls callback`, () => {
  const onPlayClick = jest.fn();

  const player = mount(
      <Player
        id={2}
        // onExitPlayButtonClick={() => {}}
        isPlay={true}
        duration={30}
        progress={10}
        onPlayClick={onPlayClick}
        onFullScreenClick={() => {}}
        setDuration={() => {}}
      />
  );

  player.find(`button.player__play`).simulate(`click`);
  expect(onPlayClick).toHaveBeenCalledTimes(1);

});


it(`Click by "full screen" button calls callback`, () => {
  const onFullScreenClick = jest.fn();

  const player = mount(
      <Player
        id={2}
        // onExitPlayButtonClick={() => {}}
        isPlay={true}
        duration={30}
        progress={10}
        onPlayClick={() => {}}
        onFullScreenClick={onFullScreenClick}
        setDuration={() => {}}
      />
  );

  player.find(`button.player__full-screen`).simulate(`click`);
  expect(onFullScreenClick).toHaveBeenCalledTimes(1);
});

