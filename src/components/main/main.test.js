import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const filmsTitles = [`The Crimes of Grindelwald`, `Predators `, `Aviator`];
const genreFilm = `Fantasy`;
const titleFilm = `One Flew Over the Cuckoo's Nest`;
const releaseDate = 1975;

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      filmsTitles={filmsTitles}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
      onSmallMovieCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

