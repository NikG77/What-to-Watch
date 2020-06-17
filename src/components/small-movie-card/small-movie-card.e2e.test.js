import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";


const title = `One Flew Over the Cuckoo's Nest`;


Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should small movie card link be pressed`, () => {
  const onSmallMovieCardClick = jest.fn();
  const onSmallMovieCardHover = jest.fn();

  const smallMovieCard = shallow(
      <SmallMovieCard
        title={title}
        onSmallMovieCardHover={onSmallMovieCardHover}
        onSmallMovieCardClick={onSmallMovieCardClick}
      />
  );

  const movieCardLinks = smallMovieCard.find(`.small-movie-card__title`);

  movieCardLinks.simulate(`click`);

  expect(onSmallMovieCardClick.mock.calls.length).toBe(1);
});


