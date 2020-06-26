import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "../video-player/video-player.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

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


it(`Checks that a video isPlaying: true`, () => {

  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideo}
        poster={film.src}
        isPlaying={true}
      />
  );

  expect(videoPlayer.state(`isPlaying`)).toEqual(true);
});


it(`Checks that a video isPlaying: false`, () => {

  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideo}
        poster={film.src}
        isPlaying={false}
      />
  );

  expect(videoPlayer.state(`isPlaying`)).toEqual(false);
});

