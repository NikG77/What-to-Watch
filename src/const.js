export const RatingLevel = {
  BAD_MIN: 0,
  NORMAL_MIN: 3,
  GOOD_MIN: 5,
  VERY_GOOD_MIN: 8,
  AWESOME: 10,
};

export const TIME_DELAY = 1000;

export const TabName = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};


export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
  ERROR: `ERROR`,
  BAD_REQUEST: `BAD_REQUEST`,
};


export const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400
};

export const AppRoute = {
  LOGIN: `/login`,
  FILM: `/films/:id`,
  ADD_REVIEW: `/films/:id/review`,
  ROOT: `/`,
  MY_LIST: `/myList`,
  PLAYER: `/player/:id`,
};

