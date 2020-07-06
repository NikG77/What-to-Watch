import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

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
  }];

const mainFilm = {
  genre: ``,
  title: `One Flew Over the Cuckoo's Nest`,
  releaseDate: 2014,
  poster: ``,
  pictureBackground: ``
};


it(`Render App`, () => {
  const store = mockStore({
    allMovies: films,
    genreMovies: films,
    movie: null,
    genre: `All genres`,
    movieCount: 8,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            mainFilm={mainFilm}
            onGenreItemClick={() => {}}
            onSmallMovieCardClick={() => {}}
            genreFilms={films}
            film={films[0]}
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
    allMovies: films,
    genreMovies: films,
    movie: films[0],
    genre: `Drama`,
    movieCount: 8,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            mainFilm={mainFilm}
            onGenreItemClick={() => {}}
            onSmallMovieCardClick={() => {}}
            genreFilms={[films[0]]}
            film={films[0]}
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
    allMovies: films,
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 8,
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            mainFilm={mainFilm}
            onGenreItemClick={() => {}}
            onSmallMovieCardClick={() => {}}
            genreFilms={films}
            film={null}
          />
        </Provider>,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();


  expect(tree).toMatchSnapshot();
});

