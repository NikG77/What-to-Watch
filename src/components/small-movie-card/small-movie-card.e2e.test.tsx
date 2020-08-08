import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import {FilmType} from "../../types";
import {noon} from "../../utils/utils";

import {SmallMovieCard} from "../small-movie-card/small-movie-card";


configure({
  adapter: new Adapter(),
});

const film: FilmType = {
  title: `One Flew Over the Cuckoo's Nest`,
  src: ``,
  poster: ``,
  ratingScore: 8,
  ratingCount: 200,
  director: ``,
  starring: [``, ``],
  genre: `Drama`,
  releaseDate: 2020,
  pictureBackground: ``,
  previewVideo: ``,
  duration: 100,
  backgroundColor: ``,
  videoLink: ``,
  description: ` `,
  isFavorite: false,
  id: 1,
};

const mockEvent = {
  preventDefault: noon,
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

  const movieCardTitle = smallMovieCard.find(`.small-movie-card`);

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
        isPlaying={false}
      />
  );

  const movieCardImage = smallMovieCard.find(`.small-movie-card`);

  movieCardImage.simulate(`click`);

  expect(onSmallMovieCardClick).toHaveBeenLastCalledWith(film);
});


it(`Should small movie card be hovered`, () => {
  jest.useFakeTimers();
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

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.simulate(`mouseenter`);
  jest.runAllTimers();

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
        isPlaying={false}
      />
  );

  const movieCard = smallMovieCard.find(`.small-movie-card`);

  movieCard.simulate(`mouseenter`);
  movieCard.simulate(`mouseleave`);

  expect(onSmallMovieCardHover).toHaveBeenLastCalledWith(null);
});
