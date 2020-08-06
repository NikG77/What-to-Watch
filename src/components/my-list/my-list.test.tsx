import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {MyList} from "./my-list";
import history from "../../history";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {AuthorizationStatus} from "../../const";
import {Provider} from "react-redux";
import {noon} from "../../utils/utils";
import {FilmType, UserInfoInterface} from "../../types";

const mockStore = configureStore([]);

const films: FilmType[] = [
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


const mockUserInfo: UserInfoInterface = {
  id: 0,
  email: ``,
  name: ``,
  avatarUrl: ``,
};


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
              userInfo={mockUserInfo}
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
