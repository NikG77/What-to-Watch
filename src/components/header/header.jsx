import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../const.js";
import {getUserInfo} from "../../reducer/user/selectors.js";

const Header = (props) => {
  const {isMain, authorizationStatus, userInfo} = props;
  const isAuthorization = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <header className="page-header movie-card__head">
      <div className="logo">
        <a href={isMain ? `#` : `main.html`} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <div className="user-block__avatar">
          {isAuthorization && <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />}
          {isAuthorization || <a className="user-block__link" >Sign in</a>}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.object.isRequired,
  ]),
  isMain: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

export {Header};

export default connect(mapStateToProps)(Header);

