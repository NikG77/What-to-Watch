import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.WHATCH;


export const getAllMovies = (state) => {
  return state[NAME_SPACE].allMovies;
};

