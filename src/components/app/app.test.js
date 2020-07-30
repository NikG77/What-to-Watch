import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../const.js";

const mockStore = configureStore([]);

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
    previewVideo: ``,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 0,
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
    previewVideo: ``,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
  }];

const mainFilm = {
  genre: ``,
  title: `One Flew Over the Cuckoo's Nest`,
  releaseDate: 2014,
  poster: ``,
  pictureBackground: ``,
  previewVideo: ``,
  src: ``,
  ratingScore: 5,
  ratingCount: 100,
  director: ` `,
  starring: [``, ``],
  duration: 100,
  backgroundColor: ``,
  videoLink: ``,
  description: ` `,
  isFavorite: false,
  id: 1,
};

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 8,
      selectedMovie: {},
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      isAuthorizationLoading: false,
    },
    [NameSpace.DATA]: {
      isFilmsLoading: false,
    },

  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            isAuthorization={false}
            login={() => {}}
            genreFilms={films}
            mainFilm={mainFilm}
            onGenreItemClick={() => {}}
            onSmallMovieCardClick={() => {}}
            isFilmsLoading={true}

            // film={films[0]}
            // onPlayButtonClick={() => {}}
            // onExitPlayButtonClick={() => {}}
            // isPlayerActive={false}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});


it(`Render MoviePage in App`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      movie: null,
      genre: `All genres`,
      movieCount: 8,
      isPlayerActive: false,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: films,
    },
  });


  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            isAuthorization={false}
            login={() => {}}
            mainFilm={mainFilm}
            onGenreItemClick={() => {}}
            onSmallMovieCardClick={() => {}}
            genreFilms={[films[0]]}
            film={films[0]}
            onPlayButtonClick={() => {}}
            onExitPlayButtonClick={() => {}}
            isPlayerActive={false}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Main in App`, () => {
  const store = mockStore({
    [NameSpace.WATCH]: {
      movie: null,
      genre: `All genres`,
      movieCount: 8,
      isPlayerActive: false,
    },
    [NameSpace.DATA]: {
      allMovies: films,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            isAuthorization={false}
            login={() => {}}
            mainFilm={mainFilm}
            onGenreItemClick={() => {}}
            onSmallMovieCardClick={() => {}}
            genreFilms={films}
            film={null}
            onPlayButtonClick={() => {}}
            onExitPlayButtonClick={() => {}}
            isPlayerActive={false}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});

