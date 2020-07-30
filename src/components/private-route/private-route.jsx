import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const.js";
import {getAuthorizationStatus, getIsAuthorizationLoading} from "../../reducer/user/selectors.js";
import Loader from "../loader/loader.jsx";


const PrivateRoute = (props) => {
  const {render, path, exact, isAuthorizationStatus, isAuthorizationLoading} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={({match}) => {
        if (isAuthorizationStatus && !isAuthorizationLoading) {
          return render({match});
        } else if (isAuthorizationLoading) {
          return <Loader />;
        }
        return <Redirect to={AppRoute.LOGIN} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthorizationStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  isAuthorizationLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizationStatus: getAuthorizationStatus(state),
  isAuthorizationLoading: getIsAuthorizationLoading(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
