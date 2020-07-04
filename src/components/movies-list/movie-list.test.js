import React from "react";
import renderer from "react-test-renderer";
import MoviesList from "./movies-list.jsx";

const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: ``,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
    duration: 100,
  },
  {title: `Bohemian Rhapsody`,
    src: ``,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: ``,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
    duration: 100,
  }];

const film = {
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  src: `img/bohemian-rhapsody.jpg`,
  poster: ``,
  ratingScore: 6.7,
  ratingCount: 200,
  director: ``,
  starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
  genre: ``,
  releaseDate: 2000,
  pictureBackground: ``,
  previewVideo: ``,
  duration: 100,
};

it(`Should MoviesList render correctly`, () => {
  const tree = renderer
    .create(<MoviesList
      films={films}
      onSmallMovieCardClick={() => {}}
      film={film}
      onItemClick={() => {}}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

  expect(tree).toMatchSnapshot();
});
