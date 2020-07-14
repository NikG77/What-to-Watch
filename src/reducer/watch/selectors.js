import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.WHATCH;


export const getGenreMovies = (state) => {
  return state[NAME_SPACE].genreMovies;
};

export const getMovie = (state) => {
  return state[NAME_SPACE].movie;
};

export const getGenre = (state) => {
  return state[NAME_SPACE].genre;
};

export const getMovieCount = (state) => {
  return state[NAME_SPACE].movieCount;
};

export const getIsPlayerActive = (state) => {
  return state[NAME_SPACE].isPlayerActive;
};

