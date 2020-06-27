const StarringFilm = {
  MIN: 3,
  MAX: 6,
};

const DirectorItems = [`Quentin Tarantino`, `Clint Eastwood`, `Tom Ford`, `Brad Bird`, `Chrostopher Nolan`, `Alejandro Gonsales Inarritu`, `Akira Kurosawa`, `James Cameron`];

const StarringItems = [`Robert De Niro`, `Matt Damon`, `Tom Hanks`, `Takeshi Kitano`, `Christian Bale`, `Gary Oldman`, `Harrison Ford`, `Ralph Fiennes`, `Morgan Freeman `, `Michael Caine`, `Brad Pitt`, `Leonardo DiCaprio`, `Edward Norton`, `Al Pacino`, `Cillian Murphy`];

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomRating = () => {
  return Math.floor(Math.random() * (100 + 1)) / 10;
};

const getRandomArray = function (array, min, max) {
  const numberRandom = getRandomIntegerNumber(min, max);
  const arrayClon = array.slice();
  const arrayNew = [];
  let numberArrayRandom;

  for (let i = 0; i < numberRandom; i++) {
    numberArrayRandom = getRandomIntegerNumber(0, arrayClon.length - 1);
    arrayNew.push(arrayClon[numberArrayRandom]);
    arrayClon.splice(numberArrayRandom, 1);
  }
  return arrayNew;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

export const mainFilm = {
  genre: `Drama`,
  title: `The Grand Budapest Hotel`,
  releaseDate: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`
};

export const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `img/video/testVideoRoma.mov`,
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `img/video/testVideoRoma.mov`,
  },
  {title: `Macbeth Aviator`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `img/video/testVideoRoma.mov`,
  },
  {title: `We need to talk about Kevin`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {title: `What We Do in the Shadows Revenant`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {title: `Johnny English`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {title: `Pulp Fiction`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `img/video/testVideoRoma.mov`,
  },
  {title: `No Country for Old Men`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, StarringFilm.MIN, StarringFilm.MAX),
    genre: `Drama`,
    releaseDate: getRandomIntegerNumber(1990, 2020),
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];


