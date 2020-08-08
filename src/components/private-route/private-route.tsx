import * as React from "react";

import {Route, Redirect, RouteComponentProps} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {getAuthorizationStatus} from "../../reducer/user/selectors";

interface Props {
  isAuthorizationStatus: boolean;
  exact: boolean;
  path: string;
  render: (routeProps?: RouteComponentProps<number>) => React.ReactNode;
}


const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {render, path, exact, isAuthorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        if (isAuthorizationStatus) {
          return render(routeProps);
        } else {
          return <Redirect to={AppRoute.LOGIN} />;
        }
      }}
    />
  );
};


const mapStateToProps = (state) => ({
  isAuthorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
