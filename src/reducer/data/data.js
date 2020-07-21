import {extend, errorPopup} from "../../utils/common.js";
import {adaptFilms, adaptFilm} from "../../adapters/films.js";


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
      .catch(({response}) => {
        return errorPopup(response);
      });
  },

  loadPromoFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        const promoFilm = adaptFilm(data);
        dispatch(ActionCreator.loadPromoFilm(promoFilm));
      })
      .catch(({response}) => {
        return errorPopup(response);
      });
  },

  postComments: (id, comment) => (dispatch, getState, api) => {
    return api.post(`/comments/${id}`, {
      rating: comment.rating,
      comment: comment.comment,
    })
      .then((data) => {
        dispatch(ActionCreator.loadComments(data));

      })
      .catch(({response}) => {
        return errorPopup(response);
      });
  },

  getComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((data) => {
        dispatch(ActionCreator.loadComments(data));

      })
      .catch(({response}) => {
        return errorPopup(response);
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

