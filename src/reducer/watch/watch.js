import {extend} from "../../utils/utils.js";


const ALL_GENRES = `All genres`;
const COUNT_FILM_SHOW = 8;

const initialState = {
  genre: ALL_GENRES,
  movieCount: COUNT_FILM_SHOW,
  isFormDisabled: false,
  selectedMovie: {},
  // id: null,

};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_FILM: `SET_FILM`,
  SET_FILMS_COUNT: `SET_FILMS_COUNT`,
  RESET_FILMS_COUNT: `RESET_FILMS_COUNT`,
  SET_FORM_DISABLED_STATUS: `SET_FORM_DISABLED_STATUS`,
  // SET_ID: `SET_ID`,
};

const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre,
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
    };
  },

  setFormDisabledStatus: (bool) => ({
    type: ActionType.SET_FORM_DISABLED_STATUS,
    payload: bool,
  }),

  // setId: (id) => ({
  //   type: ActionType.SET_ID,
  //   payload: id,
  // }),


};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.SET_FILMS_COUNT:
      return extend(state, {
        movieCount: state.movieCount + action.payload,
      });

    case ActionType.RESET_FILMS_COUNT:
      return extend(state, {
        movieCount: COUNT_FILM_SHOW,
      });

    case ActionType.SET_FORM_DISABLED_STATUS:
      return extend(state, {
        isFormDisabled: action.payload,
      });

    case ActionType.SET_FILM:
      return extend(state, {
        selectedMovie: action.payload,
      });

  }

  return state;
};


export {reducer, ActionType, ActionCreator};

