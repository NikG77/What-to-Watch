import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const films = [{title: `Fantastic Beasts: The Crimes of Grindelwald`, src: `img/bohemian-rhapsody.jpg`},
  {title: `Bohemian Rhapsody`, src: `img/bohemian-rhapsody.jpg`},
  {title: `Macbeth Aviator`, src: `img/bohemian-rhapsody.jpg`}];
const genreFilm = `Fantasy`;
const titleFilm = `One Flew Over the Cuckoo's Nest`;
const releaseDate = 1975;

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      films={films}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

