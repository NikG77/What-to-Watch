import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const filmsTitles = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling Limited`, `Orlando, Mindhunter`, `Midnight Special`];
const genreFilm = `Drama`;
const titleFilm = `The Grand Budapest Hotel`;
const releaseDate = 2014;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Should small movie card link be pressed`, () => {
    const onSmallMovieCardClick = jest.fn();

    const main = mount(
        <Main
          filmsTitles={filmsTitles}
          genreFilm={genreFilm}
          titleFilm={titleFilm}
          releaseDate={releaseDate}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
    );

    const movieCardLinks = main.find(`a.small-movie-card__link`);
    // movieCardLink.props().onClick();
    movieCardLinks.forEach((movieCardLink) => movieCardLink.simulate(`click`, {preventDefault() {}}));

    expect(onSmallMovieCardClick.mock.calls.length).toBe(filmsTitles.length);
  });

});

