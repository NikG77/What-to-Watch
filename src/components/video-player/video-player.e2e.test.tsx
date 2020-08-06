import * as React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "../video-player/video-player";

import {noon} from "../../utils/utils";
import {FilmType} from "../../types";

Enzyme.configure({
  adapter: new Adapter(),
});

const film: FilmType = {
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
  backgroundColor: ``,
  videoLink: ``,
  description: ` `,
  isFavorite: false,
  id: 1,
  duration: 100,
};


it(`Check video play`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideo}
        poster={film.src}
        isPlaying={true}
      />
  );

  window.HTMLMediaElement.prototype.play = () => {};
  const {_videoRef} = videoPlayer.instance();
  jest.spyOn(_videoRef.current, `play`);
  videoPlayer.instance().componentDidUpdate();

  expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Check video load`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideo}
        poster={film.src}
        isPlaying={false}
      />
  );

  window.HTMLMediaElement.prototype.load = () => {};
  const {_videoRef} = videoPlayer.instance();
  jest.spyOn(_videoRef.current, `load`);
  videoPlayer.instance().componentDidUpdate();

  expect(_videoRef.current.load).toHaveBeenCalledTimes(1);
});

