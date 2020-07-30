import {reducer, ActionCreator, ActionType} from "./watch.js";

const films = [{
  id: 0,
  director: ``,
  duration: 88,
  genre: `Comedy`,
  pictureBackground: ``,
  poster: ``,
  previewVideo: ``,
  ratingCount: 146,
  ratingScore: 2.7,
  releaseDate: 2012,
  src: ``,
  starring: [``, ``],
  title: ``,
  backgroundColor: ``,
  videoLink: ``,
  isFavorite: false,
}, {
  id: 1,
  director: ``,
  duration: 88,
  genre: `Drama`,
  pictureBackground: ``,
  poster: ``,
  previewVideo: ``,
  ratingCount: 146,
  ratingScore: 2.7,
  releaseDate: 2012,
  src: ``,
  starring: [``, ``],
  title: ``,
  backgroundColor: ``,
  videoLink: ``,
  isFavorite: false,
}, {
  id: 2,
  director: ``,
  duration: 88,
  genre: `Drama`,
  pictureBackground: ``,
  poster: ``,
  previewVideo: ``,
  ratingCount: 146,
  ratingScore: 2.7,
  releaseDate: 2012,
  src: ``,
  starring: [``, ``],
  title: ``,
  backgroundColor: ``,
  videoLink: ``,
  isFavorite: false,
}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {
  })).toEqual({
    genre: `All genres`,
    movieCount: 8,
    selectedMovie: {},
  });
});

it(`Action creator set genre correct`, () => {
  expect(reducer({
    genre: `All genres`,
    movieCount: 8,
    selectedMovie: {},
  }, {
    type: ActionType.SET_GENRE,
    payload: `Drama`,
  })).toEqual({
    genre: `Drama`,
    movieCount: 8,
    selectedMovie: {},
  });
});

it(`Action creator set film correct`, () => {
  expect(reducer({
    genre: `Drama`,
    movieCount: 8,
    selectedMovie: {},
  }, {
    type: ActionType.SET_FILM,
    payload: films[0],
  })).toEqual({
    genre: `Drama`,
    movieCount: 8,
    selectedMovie: films[0],
  });
});


it(`Action creator set filmsCount correct`, () => {
  expect(reducer({
    genre: `All genres`,
    movieCount: 8,
    selectedMovie: {},
  }, {
    type: ActionType.SET_FILMS_COUNT,
    payload: 8,
  })).toEqual({
    genre: `All genres`,
    movieCount: 16,
    selectedMovie: {},
  });
});


it(`Action creator reset filmsCount correct`, () => {
  expect(reducer({
    genre: `All genres`,
    movieCount: 16,
    selectedMovie: {},
  }, {
    type: ActionType.RESET_FILMS_COUNT,
  })).toEqual({
    genre: `All genres`,
    movieCount: 8,
    selectedMovie: {},
  });
});


describe(`Action creators work correctly`, () => {
  it(`Action creator set genre correctly`, () => {
    expect(ActionCreator.setGenre(`Drama`)).toEqual({
      type: ActionType.SET_GENRE,
      payload: `Drama`,
    });
  });

  it(`Action creator set film correctly`, () => {
    expect(ActionCreator.setFilm({
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      src: ``,
      poster: ``,
      ratingScore: 6.7,
      ratingCount: 200,
      director: ``,
      starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
      genre: ``,
      releaseDate: 2000,
      pictureBackground: ``,
      previewVideo: ``,
    })).toEqual({
      type: ActionType.SET_FILM,
      payload: {
        title: `Fantastic Beasts: The Crimes of Grindelwald`,
        src: ``,
        poster: ``,
        ratingScore: 6.7,
        ratingCount: 200,
        director: ``,
        starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
        genre: ``,
        releaseDate: 2000,
        pictureBackground: ``,
        previewVideo: ``,
      },
    });
  });


  it(`Action creator set film count correctly`, () => {
    expect(ActionCreator.setFilmsCount())
      .toEqual({
        type: ActionType.SET_FILMS_COUNT,
        payload: 8,
      });
  });

  it(`Action creator reset film count correctly`, () => {
    expect(ActionCreator.resetFilmsCount())
      .toEqual({
        type: ActionType.RESET_FILMS_COUNT,
      });
  });

});
