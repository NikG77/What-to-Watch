import {extend} from "../../utils/common.js";
import {adapterFilms, adapterFilm} from "../../adapters/films.js";
// import {ActionCreator as ActionCreatorWatch} from "../watch/watch.js";


const initialState = {
  allMovies: [],
  promoMovie: {},
};

const ActionType = {
  LOAD_ALL_FILMS: `LOAD_ALL_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  GET_ALL_FILMS: `GET_ALL_FILMS`,
};

const ActionCreator = {
  loadAllFilms: (films) => {
    return {
      type: ActionType.LOAD_ALL_FILMS,
      payload: films,
    };
  },
  loadPromoFilm: (film) => {
    return {
      type: ActionType.LOAD_PROMO_FILM,
      payload: film,
    };
  },
};

const Operation = {
  loadAllFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        const films = adapterFilms(data);
        dispatch(ActionCreator.loadAllFilms(films));
        // dispatch(ActionCreatorWatch.setGenreMovies(films));
      });
  },
  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        const promoFilm = adapterFilm(data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      });
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_ALL_FILMS:
      return extend(state, {
        allMovies: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        promoMovie: action.payload,
      });

  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};

