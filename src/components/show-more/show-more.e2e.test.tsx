import * as React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShowMore from "./show-more";

Enzyme.configure({
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

