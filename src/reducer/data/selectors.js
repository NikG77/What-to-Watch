import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.DATA;

export const getAllMovies = (state) => state[NAME_SPACE].allMovies;

export const getPromoMovie = (state) => state[NAME_SPACE].promoMovie;

export const getComments = (state) => state[NAME_SPACE].comments;

export const getFavoriteFilms = (state) => state[NAME_SPACE].favoriteMovies;

export const getFilmsLoadingStatus = (state) => state[NAME_SPACE].isFilmsLoading;

export const getPromoFilmLoadingStatus = (state) => state[NAME_SPACE].isPromoLoading;

export const getReviewFormStatus = (state) => state[NAME_SPACE].isFormDisabled;

