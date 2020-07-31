import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {MyList} from "./my-list.jsx";
import history from "../../history.js";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {AuthorizationStatus} from "../../const.js";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const films = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
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
  }
];


it(`MyList component render correctly`, () => {

  const store = mockStore({
    [NameSpace.WATCH]: {
      genre: `All genres`,
      movieCount: 8,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userInfo: {},
    },
    [NameSpace.DATA]: {
      favoriteMovies: [],
    },
  });

  const tree = renderer
    .create(
        <Router history={history}>
          <Provider store={store}>
            <MyList
              onLoadFavoriteFilms={() => {}}
              userInfo={{}}
              films={films}
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
