import Main from "../main/main.jsx";
import React, {PureComponent} from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {filmsType, mainFilmType} from "../../types";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      film: null,
    };

    this.handleSmallMovieCardClic = this.handleSmallMovieCardClic.bind(this);
  }

  handleSmallMovieCardClic(film) {
    this.setState({film});
  }

  _renderApp() {
    const {films, mainFilm} = this.props;
    const {film} = this.state;

    if (film === null) {
      return (
        <Main
          films={films}
          mainFilm={mainFilm}
          onSmallMovieCardClick={this.handleSmallMovieCardClic}
        />
      );
    }
    if (film) {
      return (
        <MoviePage
          film={film}
        />
      );
    }

    return null;
  }

  render() {
    const {films} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev">
            <MoviePage
              film={films[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: filmsType.isRequired,
  mainFilm: mainFilmType.isRequired,
};

export default App;

