import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      filmsTitles={[`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando, Mindhunter`, `Midnight Special`]}
      genreFilm={`Drama`}
      titleFilm={`The Grand Budapest Hotel`}
      releaseDate={2014}
      onSmallMovieCardClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

