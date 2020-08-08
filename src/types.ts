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


export interface Comment {
    author: string;
    date: number;
    id: string;
    idUser: number;
    rating: number;
    text: string;
}



