import Main from "../main/main.jsx";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const smallMovieCardHandler = () => {};
    const {films, genreFilm, titleFilm, releaseDate} = this.props;
    return (
      <Main
        films={films}
        genreFilm={genreFilm}
        titleFilm={titleFilm}
        releaseDate={releaseDate}
        onSmallMovieCardClick={smallMovieCardHandler}
      />
    );

  }

  render() {
    const smallMovieCardHandler = () => {};
    const {films, genreFilm, titleFilm, releaseDate} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev">
            <Main
              films={films}
              genreFilm={genreFilm}
              titleFilm={titleFilm}
              releaseDate={releaseDate}
              onSmallMovieCardClick={smallMovieCardHandler}
            />
          </Route>
        </Switch>
      </BrowserRouter>

    );
  }

}

App.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
  genreFilm: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  onSmallMovieCardClick: PropTypes.func
};

export default App;

