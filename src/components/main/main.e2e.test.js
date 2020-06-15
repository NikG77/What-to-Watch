import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const filmsTitles = [`Predators`];
const genreFilm = `Fantasy`;
const titleFilm = `One Flew Over the Cuckoo's Nest`;
const releaseDate = 1975;

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainComponent`, () => {
  it(`Should small movie card link be pressed`, () => {
    const onSmallMovieCardClick = jest.fn();

    const main = shallow(
        <Main
          filmsTitles={filmsTitles}
          genreFilm={genreFilm}
          titleFilm={titleFilm}
          releaseDate={releaseDate}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
    );

    const movieCardLinks = main.find(`.small-movie-card__title`);

    movieCardLinks.simulate(`click`);

    expect(onSmallMovieCardClick.mock.calls.length).toBe(1);
  });

});

