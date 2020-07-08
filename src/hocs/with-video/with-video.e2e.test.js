import React from "react";
import PropTypes from "prop-types";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from "./with-video.js";

configure({adapter: new Adapter()});

const Player = (props) => {
  const {onPlayClick, onFullScreenClick} = props;
  return (
    <div {...props}>
      <button onClick={onPlayClick} className="player__play"></button>
      <button onClick={onFullScreenClick} className="player__full-screen"></button>
    </div>
  );
};

Player.propTypes = {
  onExitPlayButtonClick: PropTypes.func.isRequired,
  isPlay: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]),
};


const PlayerWrapped = withVideo(Player);

const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: `Drama`,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: `Romance`,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }];


it(`Checks that HOC's state.isPlay initialy true `, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}};
  wrapper.instance().componentDidMount();

  expect(wrapper.state().isPlay).toBeTruthy();
});

it(`Checks that HOC's state.isPlay changing to "false" on one time onPlayClick`, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.find(Player).dive().props().onPlayClick();
  expect(wrapper.state().isPlay).toBeFalsy();
});

it(`Checks that HOC's state.isPlay changing to "true" on two onPlayClick`, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.find(Player).dive().props().onPlayClick();
  wrapper.find(Player).dive().props().onPlayClick();
  expect(wrapper.state().isPlay).toBeTruthy();
});


it(`Checks that HOC's callback turn on video (pause)`, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}, pause() {}};
  wrapper.instance().componentDidMount();

  window.HTMLMediaElement.prototype.pause = () => {};
  const {_videoRef} = wrapper.instance();
  wrapper.instance().componentDidUpdate(null, {});

  const spy = jest.spyOn(_videoRef.current, `pause`);

  wrapper.find(Player).dive().find(`.player__play`).simulate(`click`);
  wrapper.instance().componentDidUpdate(null, {});

  expect(wrapper.state().isPlay).toBeFalsy();
  expect(spy).toHaveBeenCalledTimes(1);
});

it(`Checks that HOC's callback turn on video (play)`, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}, pause() {}};
  wrapper.instance().componentDidMount();

  window.HTMLMediaElement.prototype.play = () => {};
  const {_videoRef} = wrapper.instance();
  wrapper.instance().componentDidUpdate(null, {});

  const spy = jest.spyOn(_videoRef.current, `play`);

  wrapper.find(Player).dive().find(`.player__play`).simulate(`click`);
  wrapper.find(Player).dive().find(`.player__play`).simulate(`click`);
  wrapper.instance().componentDidUpdate(null, {});

  expect(wrapper.state().isPlay).toBeTruthy();
  expect(spy).toHaveBeenCalledTimes(1);
});


it(`Checks that HOC's callback onFullScreenClick`, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}, pause() {},
    requestFullscreen() {}};
  wrapper.instance().componentDidMount();

  window.HTMLMediaElement.prototype.requestFullscreen = () => {};

  const {_videoRef} = wrapper.instance();
  wrapper.instance().componentDidUpdate(null, {});

  const spy = jest.spyOn(_videoRef.current, `requestFullscreen`);

  wrapper.find(Player).dive().find(`.player__full-screen`).simulate(`click`);
  wrapper.instance().componentDidUpdate(null, {});

  expect(spy).toHaveBeenCalledTimes(1);
});


