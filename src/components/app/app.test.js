import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      filmsTitles={[`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando, Mindhunter`, `Midnight Special`]}
      genreFilm={`Drama`}
      titleFilm={`The Grand Budapest Hotel`}
      releaseDate={2014}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

