import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {configure, mount} from "enzyme";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../const";
import {FilmType} from "../../types";
import NameSpace from "../../reducer/name-space";
import {noon} from "../../utils/utils";
import withVideo from "./with-video";


const mockStore = configureStore([]);

configure({adapter: new Adapter()});

interface Props {
  duration: number;
  id: number;
  isPlay: boolean;
  onFullScreenClick: () => void;
  onPlayClick: () => void;
  progress: number;
  setDuration: () => void;
}

const Player = React.forwardRef((props: Props, ref: React.Ref<HTMLVideoElement>) => {
  props = Object.assign({}, props);

  return <video ref={ref} />;
});


const PlayerWrapped = withVideo(Player);

const films: FilmType[] = [
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
      allMovies: films,
    },
  });

  const wrapper = mount(
      <PlayerWrapped
        id={1}
      />,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {store}
      });

  const hoc = wrapper.find(`WithVideo`);

  expect(hoc.state().isPlay).toBeTruthy();
});

it(`Checks that HOC's state.progress initialy true `, () => {

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

  const wrapper = mount(
      <PlayerWrapped
        id={1}
      />,
      {
        wrappingComponent: Provider,
        wrappingComponentProps: {store}
      });

  const hoc = wrapper.find(`WithVideo`);

  expect(hoc.state().progress).toEqual(0);
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
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>
  );

  window.HTMLMediaElement.prototype.pause = () => Promise.resolve();
  wrapper.find(`WithVideo`).children().props().onPlayClick();

  expect(wrapper.find(`WithVideo`).state().isPlay).toBeFalsy();
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
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>
  );

  window.HTMLMediaElement.prototype.pause = () => Promise.resolve();
  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  wrapper.find(`WithVideo`).children().props().onPlayClick();
  wrapper.find(`WithVideo`).children().props().onPlayClick();

  expect(wrapper.find(`WithVideo`).state().isPlay).toBeTruthy();
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
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>
  );

  window.HTMLMediaElement.prototype.pause = () => Promise.resolve();
  const {videoRef} = wrapper.find(`WithVideo`).instance();
  const spy = jest.spyOn(videoRef.current, `pause`);
  wrapper.find(`WithVideo`).children().props().onPlayClick();

  expect(wrapper.find(`WithVideo`).state().isPlay).toBeFalsy();
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
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>
  );

  window.HTMLMediaElement.prototype.play = () => Promise.resolve();
  const {videoRef} = wrapper.find(`WithVideo`).instance();
  const spy = jest.spyOn(videoRef.current, `play`);
  wrapper.find(`WithVideo`).children().props().onPlayClick();
  wrapper.find(`WithVideo`).children().props().onPlayClick();

  expect(wrapper.find(`WithVideo`).state().isPlay).toBeTruthy();
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
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <PlayerWrapped
          id={1}
        />
      </Provider>
  );

  const {videoRef} = wrapper.find(`WithVideo`).instance();
  wrapper.find(`WithVideo`).instance().videoRef.current = {requestFullscreen: noon};
  const spy = jest.spyOn(videoRef.current, `requestFullscreen`);
  wrapper.find(`WithVideo`).children().props().onFullScreenClick();

  expect(spy).toHaveBeenCalledTimes(1);
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
      </Provider>
  );

  expect(wrapper.find(`WithVideo`).state().duration).toEqual(0);
  wrapper.find(`WithVideo`).instance().videoRef.current = {duration: 11};
  wrapper.find(`WithVideo`).children().props().setDuration();

  expect(wrapper.find(`WithVideo`).state().duration).toEqual(11);
});

