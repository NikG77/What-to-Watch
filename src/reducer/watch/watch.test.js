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
    movie: null,
    genre: `All genres`,
    movieCount: 8,
    isPlayerActive: false,
  });
});

it(`Action creator set genre correct`, () => {
  expect(reducer({
    movie: null,
    genre: `All genres`,
    movieCount: 8,
    isPlayerActive: false,
  }, {
    type: ActionType.SET_GENRE,
    payload: `Drama`,
  })).toEqual({
    movie: null,
    genre: `Drama`,
    movieCount: 8,
    isPlayerActive: false,
  });
});

it(`Action creator set film correct`, () => {
  expect(reducer({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 8,
    isPlayerActive: false,
  }, {
    type: ActionType.SET_FILM,
    payload: films[0],
  })).toEqual({
    genreMovies: films,
    movie: films[0],
    genre: `Drama`,
    movieCount: 8,
    isPlayerActive: false,
  });
});


it(`Action creator set filmsCount correct`, () => {
  expect(reducer({
    genreMovies: films,
    movie: null,
    genre: `All genres`,
    movieCount: 8,
    isPlayerActive: false,
  }, {
    type: ActionType.SET_FILMS_COUNT,
    payload: 8,
  })).toEqual({
    genreMovies: films,
    movie: null,
    genre: `All genres`,
    movieCount: 16,
    isPlayerActive: false,
  });
});


it(`Action creator reset filmsCount correct`, () => {
  expect(reducer({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 24,
    isPlayerActive: false,
  }, {
    type: ActionType.RESET_FILMS_COUNT,
  })).toEqual({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 8,
    isPlayerActive: false,
  });
});

it(`Action creator setPlayer true correct`, () => {
  expect(reducer({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 24,
    isPlayerActive: false,
  }, {
    type: ActionType.SET_PLAYER,
    payload: true,
  })).toEqual({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 24,
    isPlayerActive: true,
  });
});


it(`Action creator reset Player correct`, () => {
  expect(reducer({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 8,
    isPlayerActive: true,
  }, {
    type: ActionType.RESET_PLAYER,
    payload: false,
  })).toEqual({
    genreMovies: films,
    movie: null,
    genre: `Drama`,
    movieCount: 8,
    isPlayerActive: false,
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

  // it(`Action creator set genre film correctly`, () => {
  //   expect(ActionCreator.setGenreMovies(films)).toEqual({
  //     type: ActionType.SET_GENRE_MOVIES,
  //     payload: films,
  //   });
  // });


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

  it(`Action creator set player correctly`, () => {
    expect(ActionCreator.setPlayer())
      .toEqual({
        type: ActionType.SET_PLAYER,
        payload: true,
      });
  });

  it(`Action creator reset player correctly`, () => {
    expect(ActionCreator.resetPlayer())
      .toEqual({
        type: ActionType.RESET_PLAYER,
        payload: false,
      });
  });

});
