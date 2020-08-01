import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./data.js";
import {adaptFilms, adaptFilm, adaptComments} from "../../adapters/adapters.js";

const api = createAPI(() => {});

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

const mockComments = [{fake: true}];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allMovies: [],
    promoMovie: {},
    comments: [],
    favoriteMovies: [],
    isFilmsLoading: false,
    isPromoLoading: false,
    isFormDisabled: false,
    isSendingCommentSuccessfull: false,
  });
});

it(`Reducer should update all movies by load `, () => {
  expect(reducer({
    allMovies: [],
  }, {
    type: ActionType.LOAD_ALL_FILMS,
    payload: films,
  })).toEqual({
    allMovies: films,
  });
});

it(`Reducer should update promo film by load `, () => {
  expect(reducer({
    promoMovie: [],
  }, {
    type: ActionType.LOAD_PROMO_FILM,
    payload: films[0],
  })).toEqual({
    promoMovie: films[0],
  });
});

it(`Reducer should update comments by load `, () => {
  expect(reducer({
    comments: [],
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: mockComments,
  })).toEqual({
    comments: mockComments,
  });
});

it(`Reducer should favorite movies by load`, () => {
  expect(reducer({
    favoriteMovies: [],
  }, {
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: [films[1]],
  })).toEqual({
    favoriteMovies: [films[1]],
  });
});

it(`Reducer should merge movie`, () => {
  expect(reducer({
    allMovies: films,
  }, {
    type: ActionType.MERGE_FILM,
    payload: films[1],
  })).toEqual({
    allMovies: films,
  });
});

it(`Reducer should merge promo movie`, () => {
  expect(reducer({
    promoMovie: {},
  }, {
    type: ActionType.MERGE_PROMO_FILM,
    payload: films[1],
  })).toEqual({
    promoMovie: films[1],
  });
});

it(`Reducer should is films loading`, () => {
  expect(reducer({
    isFilmsLoading: false,
  }, {
    type: ActionType.SET_FILMS_LOADING,
    payload: true,
  })).toEqual({
    isFilmsLoading: true,
  });
});

it(`Reducer should is films no loading`, () => {
  expect(reducer({
    isFilmsLoading: true,
  }, {
    type: ActionType.SET_FILMS_LOADING,
    payload: false,
  })).toEqual({
    isFilmsLoading: false,
  });
});

it(`Reducer should is promo films loading`, () => {
  expect(reducer({
    isPromoLoading: false,
  }, {
    type: ActionType.SET_PROMO_LOADING,
    payload: true,
  })).toEqual({
    isPromoLoading: true,
  });
});

it(`Reducer should is form disabled`, () => {
  expect(reducer({
    isFormDisabled: false,
  }, {
    type: ActionType.SET_FORM_DISABLED_STATUS,
    payload: true,
  })).toEqual({
    isFormDisabled: true,
  });
});

it(`Reducer should is sending comment successfull`, () => {
  expect(reducer({
    isSendingCommentSuccessfull: false,
  }, {
    type: ActionType.CHECK_IS_SENDING_SUCCESSFULL,
    payload: true,
  })).toEqual({
    isSendingCommentSuccessfull: true,
  });
});


describe(`Operation work correctly`, () => {

  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadAllFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);
    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_ALL_FILMS,
          payload: adaptFilms([{fake: true}]),
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadPromoFilm();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);
    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: adaptFilm([{fake: true}]),
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_PROMO_LOADING,
          payload: false,
        });
      });
  });

  it(`Should make a correct API call to /comments/filmId`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const commentsLoader = Operation.loadComments(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: true}]);
    return commentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_COMMENTS,
          payload: adaptComments([{fake: true}]),
        });
      });
  });


  it(`Should make a correct API call to send /comments/filmId`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const postComments = Operation.postComments(10, {
      rating: `5`,
      comment: `comments`,
    });

    apiMock
      .onPost(`/comments/10`)
      .reply(200, [{fake: true}]);
    return postComments(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHECK_IS_SENDING_SUCCESSFULL,
          payload: true,
        });
      });
  });


  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteFilmsLoader = Operation.loadFavoriteFilms();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);
    return favoriteFilmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_FAVORITE_MOVIES,
          payload: adaptFilms([{fake: true}]),
        });
      });
  });

  it(`Should make a correct API call to send /favorite/filmId/status`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const mergeFilm = Operation.changeFavoriteFilmStatus(10, 1);

    apiMock
      .onPost(`/favorite/10/1`)
      .reply(200, [{fake: true}]);
    return mergeFilm(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.MERGE_FILM,
          payload: adaptFilm([{fake: true}]),
        });
      });
  });


});
