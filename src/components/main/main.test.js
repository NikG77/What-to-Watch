import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const films = [{title: `Fantastic Beasts: The Crimes of Grindelwald`, src: ` `},
  {title: `Bohemian Rhapsody`, src: ` `},
  {title: `Macbeth Aviator`, src: ` `}];
const genreFilm = `Fantasy`;
const titleFilm = `One Flew Over the Cuckoo's Nest`;
const releaseDate = 1975;

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      films={films}
      genreFilm={genreFilm}
      titleFilm={titleFilm}
      releaseDate={releaseDate}
      onSmallMovieCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

