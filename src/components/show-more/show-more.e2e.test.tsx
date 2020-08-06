import * as React from "react";
import * as Adapter from "enzyme-adapter-react-16";
import {configure, shallow} from "enzyme";
import ShowMore from "./show-more";

configure({
  adapter: new Adapter(),
});

it(`Should "Shoe More" button be click`, () => {
  const onShowMoreButtonClick = jest.fn();

  const showMore = shallow(
      <ShowMore
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const catalogButton = showMore.find(`button.catalog__button`);

  catalogButton.simulate(`click`);
  expect(onShowMoreButtonClick.mock.calls.length).toBe(1);
});

