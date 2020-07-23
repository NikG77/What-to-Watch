import {extend} from "../../utils/utils.js";
import {adaptFilms, adaptFilm, adaptComments} from "../../adapters/adapters.js";
import {errorPopup} from "../../utils/utils.js";
import {ActionCreator as ActionCreatorState} from "../watch/watch.js";


const initialState = {
  allMovies: [],
  promoMovie: {},
  comments: [],
};

const ActionType = {
  LOAD_ALL_FILMS: `LOAD_ALL_FILMS`,
  LOAD_PROMO_FILM: `LOAD_PROMO_FILM`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
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
    return api.post(`/comments/${id}`, {
      rating: comment.rating,
      comment: comment.comment,
    })
    .then(({data}) => {
      dispatch(ActionCreatorState.setFormDisabledStatus(false));
      const comments = adaptComments(data);
      dispatch(ActionCreator.loadComments(comments));
    })
    .catch((err) => {
      dispatch(ActionCreatorState.setFormDisabledStatus(false));
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

  }

  return state;
};


export {reducer, Operation, ActionType, ActionCreator};

