import {extend} from "../../utils/utils.js";
import {adaptFilms, adaptFilm, adaptComments} from "../../adapters/adapters.js";
import {errorPopup} from "../../utils/utils.js";
import {ActionCreator as ActionCreatorWatch} from "../watch/watch.js";


const initialState = {
  allMovies: [],
  promoMovie: {},
  comments: [],
  favoriteMovies: [],
};

const ActionType = {
  LOAD_ALL_FILMS: `LOAD_ALL_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  ADD_FAVORITE_MOVIES: `ADD_FAVORITE_MOVIES`,
  REMOVE_FAVORITE_MOVIES: `REMOVE_FAVORITE_MOVIES`,

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
  loadComments: (comments) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: comments,
    };
  },
  loadFavoriteFilms: (films) => {
    return {
      type: ActionType.LOAD_FAVORITE_MOVIES,
      payload: films,
    };
  },
  addFavoriteFilm: (filmId) => {
    return {
      type: ActionType.ADD_FAVORITE_MOVIES,
      payload: filmId
    };
  },
  removeFavoriteFilm: (filmId) => {
    return {
      type: ActionType.REMOVE_FAVORITE_MOVIES,
      payload: filmId
    };
  },


};


const Operation = {
  loadAllFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        const films = adaptFilms(data);
        dispatch(ActionCreator.loadAllFilms(films));
      })
      .catch((err) => {
        return errorPopup(err);
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        const promoFilm = adaptFilm(data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
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
    .then(({data}) => {
      dispatch(ActionCreatorWatch.setFormDisabledStatus(false));
      const comments = adaptComments(data);
      dispatch(ActionCreator.loadComments(comments));
    })
    .catch((err) => {
      dispatch(ActionCreatorWatch.setFormDisabledStatus(false));
      return errorPopup(err);
    });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then(({data}) => {
        const comments = adaptComments(data);
        dispatch(ActionCreator.loadComments(comments));
      })
      .catch((err) => {
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

  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};

