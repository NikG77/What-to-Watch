const BASE_URL = `https://4.react.pages.academy`;

export const adaptFilm = (film) => {
  return {
    id: film.id,
    director: film.director,
    duration: film.run_time,
    genre: film.genre,
    pictureBackground: film.background_image,
    poster: film.poster_image,
    previewVideo: film.preview_video_link,
    ratingCount: film.scores_count,
    ratingScore: film.rating,
    releaseDate: film.released,
    src: film.background_image,
    starring: film.starring,
    title: film.name,

    backgroundColor: film.background_color,
    videoLink: film.video_link,
    description: film.description,
    isFavorite: film.is_favorite,
  };
};

export const adaptFilms = (films) => films.map((film) => adaptFilm(film));

export const adaptAuthInfo = (authInfo) => {
  return {
    id: authInfo.id,
    email: authInfo.email,
    name: authInfo.name,
    avatarUrl: BASE_URL + authInfo.avatar_url,
  };
};

const adaptComment = (comment) => {
  return {
    text: comment.comment,
    date: comment.date,
    rating: comment.rating,
    id: comment.id,
    author: comment.user.name,
    idUser: comment.user.id,
  };
};

export const adaptComments = (comments) => comments.map((comment) => adaptComment(comment));

