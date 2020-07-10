import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from "./with-video.js";

configure({adapter: new Adapter()});

const Player = (props) => <div {...props} />;

const PlayerWrapped = withVideo(Player);

const films = [
  {title: ``,
    src: ``,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [],
    genre: ``,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
  },
  {title: ``,
    src: ``,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [],
    genre: ``,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
  }];


it(`Checks that HOC's state.isPlay initialy true `, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}};

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

  const {_videoRef} = wrapper.instance();
  wrapper.instance().componentDidUpdate(null, {});

  const spy = jest.spyOn(_videoRef.current, `pause`);

  wrapper.find(Player).dive().props().onPlayClick();
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

  const {_videoRef} = wrapper.instance();
  wrapper.instance().componentDidUpdate(null, {});

  const spy = jest.spyOn(_videoRef.current, `play`);

  wrapper.find(Player).dive().props().onPlayClick();
  wrapper.find(Player).dive().props().onPlayClick();

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

  const {_videoRef} = wrapper.instance();
  wrapper.instance().componentDidUpdate(null, {});

  const spy = jest.spyOn(_videoRef.current, `requestFullscreen`);

  wrapper.find(Player).dive().props().onFullScreenClick();
  wrapper.instance().componentDidUpdate(null, {});

  expect(spy).toHaveBeenCalledTimes(1);

});


it(`Checks that HOC's "video" reset after componentWillUnmount`, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  const {_videoRef} = wrapper.instance();
  wrapper.instance()._videoRef.current = {play() {}};
  wrapper.instance().componentWillUnmount();

  expect(_videoRef.current.ontimeupdate).toBeNull();
});


it(`Checks that HOC's state.duration change `, () => {
  const wrapper = shallow(<PlayerWrapped
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />, {disableLifecycleMethods: true});

  expect(wrapper.state().duration).toEqual(0);

  wrapper.instance()._videoRef.current = {duration: 11};

  expect(wrapper.state().duration).toEqual(0);
  wrapper.props().setDuration();
  expect(wrapper.state().duration).toEqual(11);
});


// it(`Checks that HOC's state.progress change `, () => {
//   const wrapper = shallow(<PlayerWrapped
//     src={films[0].previewVideo}
//     onExitPlayButtonClick={() => {}}
//   />, {disableLifecycleMethods: true});

//   wrapper.instance()._videoRef.current = {duration: 10, currentTime: 2,
//     timeupdate() {}};

//   wrapper.instance().componentDidMount();

//   expect(wrapper.state().progress).toEqual(0);
//   expect(wrapper.state().duration).toEqual(0);

//   wrapper.props().setDuration();
//   const {_videoRef} = wrapper.instance();
//   const spy = jest.spyOn(_videoRef.current, `timeupdate`);

//   expect(wrapper.state().duration).toEqual(10);

//   expect(spy).toHaveBeenCalledTimes(1);
//   expect(wrapper.state().progress).toEqual(20);

// });

