import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  title: `One Flew Over the Cuckoo's Nest`,
  src: ``,
  preview: ``,
};

const mockEvent = {
  preventDefault() {}
};

it(`Should small movie card be pressed to title`, () => {
  const onSmallMovieCardClick = jest.fn();
  const onSmallMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onSmallMovieCardHover={onSmallMovieCardHover}
        onSmallMovieCardClick={onSmallMovieCardClick}
        isPlaying={false}
      />
  );

  const movieCardTitle = smallMovieCard.find(`.small-movie-card__title`);

  movieCardTitle.simulate(`click`, mockEvent);

  expect(onSmallMovieCardClick.mock.calls.length).toBe(1);
  expect(onSmallMovieCardClick).toHaveBeenLastCalledWith(film);
});

it(`Should small movie card be pressed to image`, () => {
  const onSmallMovieCardClick = jest.fn();
  const onSmallMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onSmallMovieCardHover={onSmallMovieCardHover}
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
  );

  const movieCardImage = smallMovieCard.find(`.small-movie-card__image`);

  movieCardImage.simulate(`click`);

  expect(onSmallMovieCardClick).toHaveBeenLastCalledWith(film);
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

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.simulate(`mouseenter`);

  expect(onSmallMovieCardHover).toHaveBeenLastCalledWith(film);
});


it(`Should small movie card be out`, () => {
  const onSmallMovieCardClick = jest.fn();
  const onSmallMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        film={film}
        onSmallMovieCardHover={onSmallMovieCardHover}
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);

  expect(onSmallMovieCardHover).toHaveBeenLastCalledWith(null);
});
