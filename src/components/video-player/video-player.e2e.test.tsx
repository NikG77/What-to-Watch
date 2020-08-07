import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, mount} from "enzyme";

import {FilmType} from "../../types";

import VideoPlayer from "../video-player/video-player";


configure({
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

  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  const {videoRef} = videoPlayer.instance();
  jest.spyOn(videoRef.current, `play`);
  videoPlayer.instance().componentDidUpdate();

  expect(videoRef.current.play).toHaveBeenCalledTimes(1);
});

it(`Check video load`, () => {
  const videoPlayer = mount(
      <VideoPlayer
        src={film.previewVideo}
        poster={film.src}
        isPlaying={false}
      />
  );

  window.HTMLMediaElement.prototype.load = () => Promise.resolve();
  const {videoRef} = videoPlayer.instance();
  jest.spyOn(videoRef.current, `load`);
  videoPlayer.instance().componentDidUpdate();

  expect(videoRef.current.load).toHaveBeenCalledTimes(1);
});

