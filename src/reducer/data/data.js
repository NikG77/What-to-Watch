import {extend} from "../../utils/common.js";
// import {films} from "./mock/films.js";

// const ALL_GENRES = `All genres`;
// const COUNT_FILM_SHOW = 8;

const initialState = {
  allMovies: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
};

const ActionCreator = {
  loadFilms: () => {
    return {
      type: ActionType.LOAD_FILMS,
    };
  },
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        allMovies: action.payload,
      });
  }

  return state;
};


export {reducer, ActionType, ActionCreator};

