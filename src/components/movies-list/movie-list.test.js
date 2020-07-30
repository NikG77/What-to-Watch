import React from "react";
import renderer from "react-test-renderer";
import {MoviesList} from "./movies-list.jsx";
import history from "../../history.js";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {Provider} from "react-redux";
import {AuthorizationStatus} from "../../const.js";

const mockStore = configureStore([]);

const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: ``,
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
    src: ``,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: ``,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: ``,
    duration: 100,
    backgroundColor: ``,
    videoLink: ``,
    description: ` `,
    isFavorite: false,
    id: 11,
  }];

it(`Should MoviesList render correctly`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 4,
    },
    // [NameSpace.DATA]: {
    //   allMovies: films,
    // },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
    },
  });
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <Provider store={store}>
            <MoviesList
              genreFilms={films}
              // onSmallMovieCardClick={() => {}}
              activeItem={films[0]}
              onItemClick={() => {}}
              filmCount={4}
              onShowMoreButtonClick={() => {}}
            />
          </Provider>
        </Router>,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
