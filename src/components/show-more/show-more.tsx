import * as React from "react";

interface Props {
  onShowMoreButtonClick: () => void;
}

const ShowMore: React.FunctionComponent<Props> = (props: Props) => {
  const {onShowMoreButtonClick} = props;

  return (
    <div className="catalog__more">
      <button
        onClick={onShowMoreButtonClick}
        className="catalog__button" type="button">Show more</button>
    </div>
  );
};

export default ShowMore;

