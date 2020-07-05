import {extend} from "./utils/common.js";
import {films} from "./mock/films.js";

const ALL_GENRES = `All genres`;

const initialState = {
  allMovies: films,
  genreMovies: films,
  movie: null,
  genre: ALL_GENRES,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_FILM: `SET_FILM`,
  GET_FILMS: `GET_FILMS`,
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
  }

  return state;
};


export {reducer, ActionType, ActionCreator};

