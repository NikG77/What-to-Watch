

export interface FilmType {
  backgroundColor: string,
  director: string,
  description: string,
  duration: number,
  id: number,
  isFavorite: boolean,
  genre: string,
  pictureBackground: string,
  poster: string,
  previewVideo: string,
  ratingScore: number,
  releaseDate: number,
  ratingCount: number,
  src: string,
  starring:Array<string>,
  title: string,
  videoLink: string,
}


export interface UserInfoInterface {
  id: number;
  email: string;
  name: string;
  avatarUrl: string;
}

export interface ReviewInterface {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}

export interface Comment {
    text: string;
    date: number;
    rating: number;
    id: string;
    author: string;
    idUser: number;

};



