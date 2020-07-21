import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./data.js";
import {adaptFilms, adaptFilm} from "../../adapters/films.js";

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


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    allMovies: [],
    promoMovie: {},
    comments: [],
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
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
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
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_PROMO_FILM,
          payload: adaptFilm([{fake: true}]),
        });
      });
  });

});
