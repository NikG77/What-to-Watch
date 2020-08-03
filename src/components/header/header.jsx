import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import Logo from "../logo/logo.jsx";

const Header = (props) => {
  const {isAuthorization, userInfo} = props;
  return (
    <header className="page-header movie-card__head">
      <Logo />

      <div className="user-block">
        <div className="user-block__avatar">
          {isAuthorization && <Link to={AppRoute.MY_LIST} className="user-block__link">
            <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>}
          {isAuthorization || <Link to={AppRoute.LOGIN} className="user-block__link" >Sign in</Link>}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userInfo: PropTypes.oneOfType([
    () => null,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
  ]),
  isAuthorization: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorization: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

export {Header};

export default connect(mapStateToProps)(Header);

