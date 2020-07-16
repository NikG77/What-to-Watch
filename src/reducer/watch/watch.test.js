import {reducer, ActionCreator, ActionType} from "./watch.js";
// import {films} from "./mock/films.js";

const films = [{
  id: 0,
  director: `Quentin Tarantino`,
  duration: 88,
  genre: `Comedy`,
  pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  ratingCount: 146,
  ratingScore: 2.7,
  releaseDate: 2012,
  src: `img/bohemian-rhapsody.jpg`,
  starring: [`Michael Caine`, `Gary Oldman`, `Al Pacino`, `Matt Damon`, `Robert De Niro`],
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  backgroundColor: `#ffffff`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  isFavorite: false,
},
{id: 1,
  director: `Chrostopher Nolan`,
  duration: 119,
  genre: `Drama`,
  pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  ratingCount: 270,
  ratingScore: 9.7,
  releaseDate: 2012,
  src: `img/bohemian-rhapsody.jpg`,
  starring: [`Matt Damon`, `Christian Bale`, `Leonardo DiCaprio`, `Robert De Niro`, `Al Pacino`, `Michael Caine`],
  title: `Bohemian Rhapsody`,
  backgroundColor: `#ffffff`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  isFavorite: false,
},
{id: 2,
  director: `Brad Bird`,
  duration: 88,
  genre: `Drama`,
  pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  ratingCount: 108,
  ratingScore: 9.9,
  releaseDate: 2001,
  src: `img/bohemian-rhapsody.jpg`,
  starring: [`Christian Bale`, `Leonardo DiCaprio`, `Al Pacino`, `Michael Caine`, `Gary Oldman`, `Brad Pitt`, `Morgan Freeman `],
  title: `Macbeth Aviator`,
  backgroundColor: `#ffffff`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  isFavorite: false,
},
{id: 3,
  director: `Quentin Tarantino`,
  duration: 127,
  genre: `Documentary`,
  pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  ratingCount: 292,
  ratingScore: 7.9,
  releaseDate: 1997,
  src: `img/bohemian-rhapsody.jpg`,
  starring: [`Leonardo DiCaprio`, `Matt Damon`, `Edward Norton`, `Morgan Freeman `, `Gary Oldman`],
  title: `We need to talk about Kevin`,

  backgroundColor: `#ffffff`,
  videoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
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
