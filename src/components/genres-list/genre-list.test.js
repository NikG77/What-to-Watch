import React from "react";
import renderer from "react-test-renderer";
import GenresList from "./genres-list";


const activeGenre = `All genre`;

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(<GenresList
      genresList={[activeGenre]}
      activeGenre={activeGenre}
      onGenreItemClick={() => {}}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
