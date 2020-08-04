import React from "react";

import Adapter from "enzyme-adapter-react-16";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import withAddReview from "./with-add-review";
import {configure, mount} from "enzyme";

import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../const";

const mockStore = configureStore([]);

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withAddReview(MockComponent);

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

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
    [NameSpace.DATA]: {
      allMovies: films,
    },
  });

  const wrapper = mount(
      <Provider store={store}>
        <MockComponentWrapped
          id={1}
        />
      </Provider>
  );

  const hoc = wrapper.find(`WithAddReview`);

  expect(hoc.state().review).toEqual(``);
  expect(hoc.state().rating).toEqual(3);

});
