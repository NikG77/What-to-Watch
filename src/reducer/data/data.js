import {extend} from "../../utils/utils";
import {adaptFilms, adaptFilm, adaptComments} from "../../adapters/adapters";
import {errorPopup} from "../../utils/utils";
import NameSpace from "../name-space";
import history from "../../history";
import {AppRoute} from "../../const";


const initialState = {
  allMovies: [],
  promoMovie: {},
  comments: [],
  favoriteMovies: [],
  isFilmsLoading: false,
  isPromoLoading: false,
  isFormDisabled: false,
};

const ActionType = {
  LOAD_ALL_FILMS: `LOAD_ALL_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  MERGE_FILM: `MERGE_FILM`,
  MERGE_PROMO_FILM: `MERGE_PROMO_FILM`,
  SET_FILMS_LOADING: `SET_FILMS_LOADING`,
  SET_PROMO_LOADING: `SET_PROMO_LOADING`,
  SET_FORM_DISABLED_STATUS: `SET_FORM_DISABLED_STATUS`,
  CHECK_IS_SENDING_SUCCESSFULL: `CHECK_IS_SENDING_SUCCESSFULL`,
};

const ActionCreator = {
  loadAllFilms: (films) => ({
    type: ActionType.LOAD_ALL_FILMS,
    payload: films,
  }),

  loadPromoFilm: (film) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: film,
  }),

  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),

  loadFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: films,
  }),

  mergeFilm: (film) => ({
    type: ActionType.MERGE_FILM,
    payload: film,
  }),

  mergePromoFilm: (film) => ({
    type: ActionType.MERGE_PROMO_FILM,
    payload: film,
  }),

  setFilmsLoading: (isFilmsLoading) => ({
    type: ActionType.SET_FILMS_LOADING,
    payload: isFilmsLoading
  }),

  setPromoLoading: (isPromoLoading) => ({
    type: ActionType.SET_PROMO_LOADING,
    payload: isPromoLoading
  }),

  setFormDisabledStatus: (isFormLoading) => ({
    type: ActionType.SET_FORM_DISABLED_STATUS,
    payload: isFormLoading,
  }),

};


const Operation = {
  loadAllFilms: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFilmsLoading(true));
    return api.get(`/films`)
      .then(({data}) => {
        const films = adaptFilms(data);
        dispatch(ActionCreator.loadAllFilms(films));
        dispatch(ActionCreator.setFilmsLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setFilmsLoading(false));
        return errorPopup(err);
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setPromoLoading(true));
    return api.get(`/films/promo`)
      .then((response) => {
        const promoFilm = adaptFilm(response.data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
        dispatch(ActionCreator.setPromoLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setPromoLoading(false));
        return errorPopup(err);
      });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        const comments = adaptComments(response.data);
        dispatch(ActionCreator.loadComments(comments));
      })
      .catch((err) => {
        return errorPopup(err);
      });
  },

  postComments: (id, comment) => (dispatch, getState, api) => {
    dispatch(ActionCreator.setFormDisabledStatus(true));
    return api.post(`/comments/${id}`, {
      rating: comment.rating,
      comment: comment.comment,
    })
    .then((response) => {
      dispatch(ActionCreator.setFormDisabledStatus(false));
      const comments = adaptComments(response.data);
      dispatch(ActionCreator.loadComments(comments));
      history.push(`${AppRoute.FILM}/${id}`);
    })
    .catch((err) => {
      dispatch(ActionCreator.setFormDisabledStatus(false));
      return errorPopup(err);
    });
  },

  loadFavoriteFilms: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        const films = adaptFilms(data);
        dispatch(ActionCreator.loadFavoriteFilms(films));
      })
      .catch((err) => {
        return errorPopup(err);
      });
  },

  changeFavoriteFilmStatus: (id, status) => (dispatch, getState, api) => {
    return api.post(`/favorite/${id}/${status}`)
      .then(({data}) => {
        const film = adaptFilm(data);
        const store = getState();
        if (store[NameSpace.DATA].promoMovie.id === id) {
          dispatch(ActionCreator.mergePromoFilm(film));
        }
        dispatch(ActionCreator.mergeFilm(film));
      })
      .catch((err) => {
        return errorPopup(err);
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
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return extend(state, {
        favoriteMovies: action.payload,
      });
    case ActionType.MERGE_FILM:
      return extend(state, {
        allMovies: state.allMovies.map((film) => film.id === action.payload.id ? action.payload : film)
      });
    case ActionType.MERGE_PROMO_FILM:
      return extend(state, {
        promoMovie: action.payload
      });

    case ActionType.SET_FILMS_LOADING:
      return extend(state, {
        isFilmsLoading: action.payload
      });

    case ActionType.SET_PROMO_LOADING:
      return extend(state, {
        isPromoLoading: action.payload
      });

    case ActionType.SET_FORM_DISABLED_STATUS:
      return extend(state, {
        isFormDisabled: action.payload,
      });

  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};

