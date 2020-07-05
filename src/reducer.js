import {extend} from "./utils/common.js";
import {films} from "./mock/films.js";

const ALL_GENRES = `All genres`;
const COUNT_FILM_SHOW = 4;

const initialState = {
  allMovies: films,
  genreMovies: films,
  movie: null,
  genre: ALL_GENRES,
  movieCount: COUNT_FILM_SHOW,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_FILM: `SET_FILM`,
  GET_FILMS: `GET_FILMS`,
  SET_FILMS_COUNT: `SET_FILMS_COUNT`,
  RESET_FILMS_COUNT: `RESET_FILMS_COUNT`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
  }),

  getFilms: () => ({
    type: ActionType.GET_FILMS,
  }),

  setFilm: (film) => ({
    type: ActionType.SET_FILM,
    payload: film,
  }),

  setFilmsCount: () => ({
    type: ActionType.SET_FILMS_COUNT,
    payload: COUNT_FILM_SHOW,
  }),

  resetFilmsCount: () => {
    return {
      type: ActionType.RESET_FILMS_COUNT,
      // payload: null,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILMS:
      let genreMovies = initialState.allMovies;
      if (state.genre !== initialState.genre) {
        genreMovies = genreMovies.filter((movie) => movie.genre === state.genre);
      }
      return extend(state, {
        genreMovies,
      });

    case ActionType.SET_FILM:
      return extend(state, {
        movie: action.payload,
      });

    case ActionType.SET_FILMS_COUNT:
      return extend(state, {
        movieCount: state.movieCount + action.payload,
      });

    case ActionType.RESET_FILMS_COUNT:
      return extend(state, {
        movieCount: COUNT_FILM_SHOW,
      });

  }

  return state;
};


export {reducer, ActionType, ActionCreator};

