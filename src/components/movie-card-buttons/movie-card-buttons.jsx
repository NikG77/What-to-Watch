import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {Operation as OperationData} from "../../reducer/data/data.js";

const MovieCardButtons = (props) => {
  const {id, isFavorite, onChangeStatusButtonClick} = props;

  return (
    <div className="movie-card__buttons">
      <Link to={`${AppRoute.PLAYER}/${id}`} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list movie-card__button" type="button"
        onClick={() => {
          const status = isFavorite ? 0 : 1;
          onChangeStatusButtonClick(id, status);
        }}
      >
        {isFavorite ?
          <svg viewBox="0 0 18 14" width={18} height={14}>
            <use xlinkHref="#in-list"></use>
          </svg> :
          <svg viewBox="0 0 19 20" width={19} height={20}>
            <use xlinkHref="#add"/>
          </svg>}
        <span>My list</span>
      </button>
      <Link to={`${AppRoute.FILM}/${id}${AppRoute.ADD_REVIEW}`} className="btn movie-card__button">Add review</Link>
    </div>


  );
};

MovieCardButtons.propTypes = {
  isFavorite: PropTypes.oneOfType([
    () => null,
    PropTypes.bool.isRequired,
  ]),
  onChangeStatusButtonClick: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};


const mapDispatchToProps = (dispatch) => ({
  onChangeStatusButtonClick(id, status) {
    dispatch(OperationData.changeFavoriteFilmStatus(id, +status));
  }
});

export {MovieCardButtons};

export default connect(null, mapDispatchToProps)(MovieCardButtons);
