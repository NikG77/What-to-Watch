import * as React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

const Error404 = () => {

  return (
    <>
    <h1>
      404.
      <br />
      <small>Page not found</small>
    </h1>
    <Link to={AppRoute.ROOT}>Go to main page</Link>
  </>
  );
};

export default Error404;
