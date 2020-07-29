import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/watch/watch.js";

const Logo = (props) => {
  const {className, onLinkToMainPage} = props;

  return (
    <div className="logo">
      <Link to={AppRoute.ROOT}
        className={`logo__link ${className || ``}`}
        onClick={onLinkToMainPage}
      >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  onLinkToMainPage: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onLinkToMainPage() {
    dispatch(ActionCreator.setId(null));
  }
});

export {Logo};

export default connect(null, mapDispatchToProps)(Logo);


