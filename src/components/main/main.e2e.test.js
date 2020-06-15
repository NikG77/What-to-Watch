import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Should small movie card link be pressed`, () => {
    const onSmallMovieCardClick = jest.fn();

    const main = mount(
        <Main
          filmsTitles={[`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando, Mindhunter`, `Midnight Special`]}
          genreFilm={`Drama`}
          titleFilm={`The Grand Budapest Hotel`}
          releaseDate={2014}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
    );

    const movieCardLink = main.find(`a.small-movie-card__link`);
    // movieCardLink.props().onClick();
    movieCardLink.simulate(`click`, {preventDefault() {}});

    expect(onSmallMovieCardClick.mock.calls.length).toBe(1);
  });

});

