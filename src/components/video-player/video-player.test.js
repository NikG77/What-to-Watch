import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film = {
  preview: ``,
  src: ` `
};


it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={film.preview}
      poster={film.src}
      isPlaying={false}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
