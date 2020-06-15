import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const filmsTitles = [`The Crimes of Grindelwald`, ` `, `Aviator`];
const genreFilm = `Fantasy`;
const titleFilm = `One Flew Over the Cuckoo's Nest`;
const releaseDate = 1975;

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      filmsTitles={filmsTitles}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

