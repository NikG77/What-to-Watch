import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


const film = {title: `One Flew Over the Cuckoo's Nest`, src: ``};


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should small movie card be pressed`, () => {
  const onSmallMovieCardClick = jest.fn();
  const onSmallMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onSmallMovieCardHover={onSmallMovieCardHover}
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
  );

  const movieCardLinks = smallMovieCard.find(`.small-movie-card__title`);

  movieCardLinks.simulate(`click`);

  expect(onSmallMovieCardClick.mock.calls.length).toBe(1);
});

it(`Should small movie card be hovered`, () => {
  const onSmallMovieCardClick = jest.fn();
  const onSmallMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onSmallMovieCardHover={onSmallMovieCardHover}
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
  );

  const movieCardLinks = smallMovieCard.find(`.small-movie-card__title`);

  movieCardLinks.simulate(`mouseover`);

  expect(onSmallMovieCardClick.mock.calls.length).toBe(1);
});


