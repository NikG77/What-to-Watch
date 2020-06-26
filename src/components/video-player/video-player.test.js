import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video-player.jsx";

const film = {
  title: `One Flew Over the Cuckoo's Nest`,
  src: ``,
  poster: ``,
  ratingScore: 8,
  ratingCount: 200,
  director: ``,
  starring: [``, ``],
  genre: `Drama`,
  releaseDate: 2020,
  pictureBackground: ``,
  previewVideo: ``,
};


it(`Should VideoPlayer render correctly`, () => {
  const tree = renderer
    .create(<VideoPlayer
      src={film.previewVideo}
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
