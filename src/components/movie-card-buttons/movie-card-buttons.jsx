import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const MovieCardButtons = (props) => {
  const {isMainPage, onPlayButtonClick, isFavorite, isAuthorization} = props;

  return (
    <div className="movie-card__buttons">
      <button onClick={onPlayButtonClick} className="btn btn--play movie-card__button" type="button">
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list movie-card__button" type="button">
        <svg viewBox="0 0 19 20" width="19" height="20">
          {isFavorite ? <use xlinkHref="in-list"></use> : <use xlinkHref="#add"></use>}
        </svg>
        <span>My list</span>
      </button>
      {isMainPage && isAuthorization ? `` : <Link to={AppRoute.ADD_REVIEW} className="btn movie-card__button">Add review</Link>}
    </div>


  );
};

MovieCardButtons.propTypes = {
  isMainPage: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.oneOfType([
    () => null,
    PropTypes.bool.isRequired,
  ]),
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorization: getAuthorizationStatus(state),
});

export {MovieCardButtons};

export default connect(mapStateToProps)(MovieCardButtons);
