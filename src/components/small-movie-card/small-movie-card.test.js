import React from "react";
import renderer from "react-test-renderer";
import {SmallMovieCard} from "./small-movie-card";
import history from "../../history";
import {Router} from "react-router-dom";

const film = {
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

it(`Should SmallMovieCard render correctly`, () => {
  const tree = renderer
    .create(
        <Router
          history={history}
        >
          <SmallMovieCard
            film={film}
            onSmallMovieCardClick={() => {}}
            onSmallMovieCardHover={() => {}}
            isPlaying={false}
          />
        </Router>,
        {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
