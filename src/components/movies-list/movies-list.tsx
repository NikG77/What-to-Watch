import * as React from "react";

import {connect} from "react-redux";

import {ActionCreator} from "../../reducer/watch/watch";
import {getMovieCount} from "../../reducer/watch/selectors";
import {FilmType} from "../../types";
import ShowMore from "../show-more/show-more";
import SmallMovieCard from "../small-movie-card/small-movie-card";


interface Props {
  activeItem: FilmType;
  filmCount: number;
  genreFilms: Array<FilmType>;
  onItemClick: () => void;
  onShowMoreButtonClick: () => void;
}

const MoviesList: React.FunctionComponent<Props> = (props: Props) => {

  const {
    activeItem,
    filmCount,
    genreFilms,
    onItemClick,
    onShowMoreButtonClick
  } = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {genreFilms.slice(0, filmCount).map((movie) =>
          <SmallMovieCard
            key={movie.id}
            film={movie}
            onSmallMovieCardHover={onItemClick}
            isPlaying={!!activeItem && activeItem.id === movie.id}
          />
        )}
      </div>

      {genreFilms.length > filmCount && <ShowMore onShowMoreButtonClick={onShowMoreButtonClick} />}

    </React.Fragment>
  );

};


const mapStateToProps = (state) => ({
  filmCount: getMovieCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.setFilmsCount());
  },
});

export {MoviesList};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);


