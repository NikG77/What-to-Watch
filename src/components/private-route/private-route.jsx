import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";


const PrivateRoute = (props) => {
  const {render, path, exact, isAuthorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={({match}) => {
        return (
          isAuthorizationStatus ? render({match}) : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  isAuthorizationStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
