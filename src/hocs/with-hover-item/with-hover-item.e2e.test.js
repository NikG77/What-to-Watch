import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withHoverItem from "./with-hover-item.js";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withHoverItem(MockComponent);

const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: `Drama`,
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
    genre: `Romance`,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
  }];


it(`Should change answers`, () => {
  const wrapper = shallow(<MockComponentWrapped
    films={films}
    onSmallMovieCardClickr={() => {}}
  />);

  expect(wrapper.props().film).toEqual(null);

  wrapper.props().onSmallMovieCardHover(films[0]);
  expect(wrapper.props().film).toEqual(films[0]);

  wrapper.props().onSmallMovieCardHover(null);
  expect(wrapper.props().film).toEqual(null);
});

