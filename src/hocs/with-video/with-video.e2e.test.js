import React from "react";
import {configure, shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from "./with-video.js";

import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../const.js";

const mockStore = configureStore([]);

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
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
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
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
  }];


it(`Checks that HOC's state.isPlay initialy true `, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}};

  expect(wrapper.state().isPlay).toBeTruthy();
});


it(`Checks that HOC's state.isPlay changing to "false" on one time onPlayClick`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const wrapper = shallow(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

  wrapper.find(Player).dive().props().onPlayClick();
  expect(wrapper.state().isPlay).toBeFalsy();
});


it(`Checks that HOC's state.isPlay changing to "true" on two onPlayClick`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const wrapper = shallow(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

  wrapper.find(Player).dive().props().onPlayClick();
  wrapper.find(Player).dive().props().onPlayClick();
  expect(wrapper.state().isPlay).toBeTruthy();
});


it(`Checks that HOC's callback turn on video (pause)`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const wrapper = shallow(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

  wrapper.instance()._videoRef.current = {play() {}, pause() {}};
  wrapper.instance().componentDidMount();

  const {_videoRef} = wrapper.instance();
  const spy = jest.spyOn(_videoRef.current, `pause`);

  wrapper.find(Player).dive().props().onPlayClick();
  wrapper.instance().componentDidUpdate(null, {});

  expect(wrapper.state().isPlay).toBeFalsy();
  expect(spy).toHaveBeenCalledTimes(1);
});


it(`Checks that HOC's callback turn on video (play)`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const wrapper = shallow(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

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

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: [],
    },
  });

  const wrapper = shallow(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

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

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: films,
    },
  });

  const wrapper = shallow(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>,
      {disableLifecycleMethods: true});

  const {_videoRef} = wrapper.instance();
  wrapper.instance()._videoRef.current = {play() {}};
  wrapper.instance().componentWillUnmount();

  expect(_videoRef.current.ontimeupdate).toBeNull();
});


it(`Checks that HOC's state.duration change `, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 8,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>, {disableLifecycleMethods: true});

  expect(wrapper.state().duration).toEqual(0);

  wrapper.instance()._videoRef.current = {duration: 11};

  expect(wrapper.state().duration).toEqual(0);
  wrapper.props().setDuration();
  expect(wrapper.state().duration).toEqual(11);
});

