import * as React from "react";
import * as renderer from "react-test-renderer";
import GenresList from "./genres-list";
import {noon} from "../../utils/utils";


const activeGenre: string = `All genre`;

it(`Should GenresList render correctly`, () => {
  const tree = renderer
    .create(<GenresList
      genresList={[activeGenre]}
      activeGenre={activeGenre}
      onGenreItemClick={noon}
    />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
