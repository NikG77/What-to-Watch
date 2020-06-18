const STARRING_FILM = {
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

const getRandomArray = function (arr, min, max) {
  const numberRandom = getRandomIntegerNumber(min, max);
  const arrClon = arr.slice();
  const arrNew = [];
  let numberArrRandom;

  for (let i = 0; i < numberRandom; i++) {
    numberArrRandom = getRandomIntegerNumber(0, arrClon.length - 1);
    arrNew.push(arrClon[numberArrRandom]);
    arrClon.splice(numberArrRandom, 1);
  }
  return arrNew;
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
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `Macbeth Aviator`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `We need to talk about Kevin`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `What We Do in the Shadows Revenant`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `Johnny English`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `Pulp Fiction`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  },
  {title: `No Country for Old Men`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: getRandomRating(),
    ratingCount: getRandomIntegerNumber(50, 300),
    director: getRandomArrayItem(DirectorItems),
    starring: getRandomArray(StarringItems, STARRING_FILM.MIN, STARRING_FILM.MAX),
  }
];


