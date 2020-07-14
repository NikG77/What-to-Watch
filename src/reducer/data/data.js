import {extend} from "../../utils/common.js";
import {adapterFilms, adapterFilm} from "../../adapters/films.js";


const initialState = {
  allMovies: [],
  promoMovie: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`
};

const ActionCreator = {
  loadFilms: (films) => {
    return {
      type: ActionType.LOAD_FILMS,
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
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        const films = adapterFilms(data);
        dispatch(ActionCreator.loadFilms(films));
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
    case ActionType.LOAD_FILMS:
      return extend(state, {
        allMovies: action.payload,
      });
    case ActionType.LOAD_PROMO_FILM:
      return extend(state, {
        allMovies: action.payload,
      });
  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};

