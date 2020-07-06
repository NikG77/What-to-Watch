import React from "react";
import renderer from "react-test-renderer";
import ReviewsCols from "./reviews-col.jsx";

const reviewsCols = [
  {
    text: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Quentin Tarantino`,
    date: new Date(`2010-10-10`),
    rating: 9,
    id: `1111`,
  },
];

it(`Should ReviewsCols render correctly`, () => {
  const tree = renderer
    .create(<ReviewsCols
      reviewsCols={reviewsCols}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
