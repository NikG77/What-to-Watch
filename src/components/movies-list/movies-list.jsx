import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filmsType, filmType} from "../../types";
import ShowMore from "../show-more/show-more.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";


const MoviesList = (props) => {

  const {genreFilms, onSmallMovieCardClick, activeItem, onItemClick, filmCount, onShowMoreButtonClick} = props;

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {genreFilms.slice(0, filmCount).map((movie, i) =>
          <SmallMovieCard
            key={movie + i}
            film={movie}
            onSmallMovieCardClick={onSmallMovieCardClick}
            onSmallMovieCardHover={onItemClick}
            isPlaying={activeItem === movie}
          />
        )}
      </div>

      {genreFilms.length > filmCount ? <ShowMore onShowMoreButtonClick={onShowMoreButtonClick} /> : null}

    </React.Fragment>
  );

};

MoviesList.propTypes = {
  genreFilms: filmsType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  filmCount: PropTypes.number.isRequired,
  onShowMoreButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filmCount: state.movieCount,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(ActionCreator.setFilmsCount());
  },
});

export {MoviesList};
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);


