import Main from "../main/main.jsx";
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";

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
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    ratingScore: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    pictureBackground: PropTypes.string.isRequired,
  })).isRequired,
  mainFilm: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    pictureBackground: PropTypes.string.isRequired,
  }).isRequired,
  onSmallMovieCardClick: PropTypes.func
};

export default App;

