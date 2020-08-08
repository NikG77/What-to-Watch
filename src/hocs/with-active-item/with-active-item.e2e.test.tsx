import * as React from "react";
import {configure, shallow} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withActiveItem from "./with-active-item";
import {noon} from "../../utils/utils";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

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
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
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
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 1,
  }];


it(`Should change the item after the action`, () => {
  const wrapper = shallow(<MockComponentWrapped
    activeItem={{}}
    onItemClick={noon}
  />);

  expect(wrapper.props().activeItem).toEqual(null);

  wrapper.props().onItemClick(films[0]);
  expect(wrapper.props().activeItem).toEqual(films[0]);

  wrapper.props().onItemClick(null);
  expect(wrapper.props().activeItem).toEqual(null);
});

