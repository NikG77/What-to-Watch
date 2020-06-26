import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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
  },
  {title: `Bohemian Rhapsody`,
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
  }];

const mainFilm = {
  genre: ``,
  title: `One Flew Over the Cuckoo's Nest`,
  releaseDate: 2014,
  poster: ``,
  pictureBackground: ``
};


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      films={films}
      mainFilm={mainFilm}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();


  expect(tree).toMatchSnapshot();
});

