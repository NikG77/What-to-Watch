import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./movie-page.jsx";

const films = [
  {
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
  }
];


it(`Should MoviePage render correctly`, () => {
  const tree = renderer
    .create(<MoviePage
      film={films[0]}
      genreFilms={films}
      onSmallMovieCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
