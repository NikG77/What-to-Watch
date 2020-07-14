import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.WATCH;


export const getAllMovies = (state) => {
  return state[NAME_SPACE].allMovies;
};

export const getPromoMovie = (state) => {
  return state[NAME_SPACE].promoMovie;
};

