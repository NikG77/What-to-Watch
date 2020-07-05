import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main";

const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Comedies`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Drama`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `Macbeth Aviator`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Drama`,
    releaseDate: 2011,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `We need to talk about Kevin`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``], genre: `Documentary`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `What We Do in the Shadows Revenant`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Horror`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `Johnny English`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Romance`,
    releaseDate: 2020,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `Pulp Fiction`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Sci-Fi`,
    releaseDate: 1988,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  },
  {title: `No Country for Old Men`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    ratingScore: 5,
    ratingCount: 100,
    director: ` `,
    starring: [``, ``],
    genre: `Kids & Family`,
    releaseDate: 1999,
    pictureBackground: `img/bg-the-grand-budapest-hotel.jpg`,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    duration: 100,
  }
];


const mainFilm = {
  genre: ``,
  title: `One Flew Over the Cuckoo's Nest`,
  releaseDate: 2014,
  poster: ``,
  pictureBackground: ``
};

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      films={films}
      mainFilm={mainFilm}
      onSmallMovieCardClick={() => {}}
      onGenreItemClick={() => {}}
      activeGenre={``}
      allFilms={[]}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});

