import * as React from "react";
import * as renderer from "react-test-renderer";
import ReviewsColumn from "./reviews-column";
import {Comment} from "../../types";

const reviewsColumns: Comment[] = [
  {
    author: `Quentin Tarantino`,
    date: 1677777,
    id: `1111`,
    idUser: 15,
    rating: 9,
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
  },
];

it(`Should ReviewsColumn render correctly`, () => {
  const tree = renderer
    .create(<ReviewsColumn
      reviewsColumns={reviewsColumns}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
