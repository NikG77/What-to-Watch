import * as React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getUserInfo} from "../../reducer/user/selectors";
import {UserInfoInterface} from "../../types";
import Logo from "../logo/logo";


interface Props {
  isAuthorization: boolean;
  userInfo: UserInfoInterface;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {isAuthorization, userInfo} = props;
  return (
    <header className="page-header movie-card__head">
      <Logo />

      <div className="user-block">
        <div className="user-block__avatar">
          {isAuthorization && <Link to={AppRoute.MY_LIST} className="user-block__link">
            <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />
          </Link>}
        </div>
        {isAuthorization || <Link to={AppRoute.LOGIN} className="user-block__link">Sign in</Link>}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthorization: getAuthorizationStatus(state),
  userInfo: getUserInfo(state),
});

export {Header};

export default connect(mapStateToProps)(Header);

