import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {filmsType} from "../../types";


class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      film: null,
      isPlaying: false,
    };

    this.handleSmallMovieCardHover = this.handleSmallMovieCardHover.bind(this);
  }

  handleSmallMovieCardHover(film) {
    if (film) {
      this.setState({film, isPlaying: true});
    } else {
      this.setState({film: null, isPlaying: false});
    }
  }

  render() {
    const {films, onSmallMovieCardClick} = this.props;
    const {isPlaying, film} = this.state;


    return (
      <div className="catalog__movies-list">
        {films.map((movie, i) =>
          <SmallMovieCard
            key={movie + i}
            film={movie}
            onSmallMovieCardClick={onSmallMovieCardClick}
            onSmallMovieCardHover={this.handleSmallMovieCardHover}
            isPlaying={isPlaying && film === movie}
          />
        )}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: filmsType.isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
