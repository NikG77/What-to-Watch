import {extend} from "./utils.js";
import {films} from "./mock/films.js";

const initialState = {
  genre: `All genres`,
  movies: films,
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  GET_FILMS: `GET_FILMS`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILMS:
      const filterMovies = initialState.movies;
      if (state.genre !== initialState.genre) {
        filterMovies = initialState.movies.filter((movie) => movie.genre === state.genre);
      }
      return extend(state, {
        movies: filterMovies,
      });


  }

  return state;
};


export {reducer, ActionType};

